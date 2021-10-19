// ===============================Variables Declaration================================================
//Get all images and set them in array
let imgs = [...document.querySelectorAll(".slider-container img")];

//Set current Slide
let currentSlide = 1;

//Get Slide Number Element
let slideNumber = document.getElementById("slide-number");

//Get Previous And Next Button
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
// ===============================Variables Declaration================================================

//=======================================================================================
//Create New UL Element
let indicatorsList = document.createElement("ul");

//Set ID For new UL element
indicatorsList.setAttribute("id", "indicatorsList");

//Loop To Make li Based On Number Of images
for (let i = 0; i < imgs.length; i++) {
  //Create new li element
  let indicatorsListItems = document.createElement("li");

  //Set custom attribute
  indicatorsListItems.setAttribute("data-index", i + 1);

  //Append indicatorsListItems to the indicatorsList
  indicatorsList.appendChild(indicatorsListItems);
}
//Add indicatorsList To the page
document.getElementById("indicators").appendChild(indicatorsList);

//Get New Created UL
let newIndicatorsElement = document.getElementById("indicatorsList");

//Set indicatorsItems in array
let indicatorsItemsBullets = Array.from(
  document.querySelectorAll("#indicatorsList li")
);

//Loop Through Bullets to Slide Images
for (let i = 0; i < imgs.length; i++) {
  indicatorsItemsBullets[i].addEventListener("click", function () {
    currentSlide = this.getAttribute("data-index");
    checker();
  });
}

//=====================================Functions Declarations========================================
checker();
//Next Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
nextButton.addEventListener("click", function () {
  nextSlide();
});
//Previous Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
prevButton.addEventListener("click", function () {
  prevSlide();
});
//Checker Function
function checker() {
  //Set Slide Number Based on images count
  slideNumber.textContent = `Slide #${currentSlide} of ${imgs.length}`;

  removeActive();
  //Set active class to the current image
  imgs[currentSlide - 1].classList.add("active");

  //Set active class to the current indicator bullet
  newIndicatorsElement.children[currentSlide - 1].classList.add("active");

  //Check if currentSlide is first
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  //Check if currentSlide is last
  if (currentSlide == imgs.length) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

//remove all active classes from images and bullets
function removeActive() {
  //images
  imgs.forEach((img) => img.classList.remove("active"));
  //bullets
  indicatorsItemsBullets.forEach((bullet) => bullet.classList.remove("active"));
}
