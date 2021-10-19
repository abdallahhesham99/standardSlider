//Get Items
let sliderImages = [...document.querySelectorAll(".slider-container img")];

//set Current Slide
let currentSlide = 1;

//Slide Number Element
let slideNumber = document.getElementById("slide-number");

//Previous And Next Buttons
let prevButton = document.getElementById("prev"),
  nextButton = document.getElementById("next");
//=======================================================================================

//create main ul Element
let indicatorsElement = document.createElement("ul");

//set ID on Created ul Element
indicatorsElement.setAttribute("id", "indicatorsList");

//create list item based od slideImages
for (let i = 0; i < sliderImages.length; i++) {
  // create the LI
  let indicatorsItem = document.createElement("li");

  // set custom Attr
  indicatorsItem.setAttribute("data-index", i + 1);

  //Append Items to the main Ul List
  indicatorsElement.appendChild(indicatorsItem);
}
//Add The Created New Ul Element to page
document.getElementById("indicators").appendChild(indicatorsElement);

//Get The New Created Ul
let indicatorsNewUL = document.getElementById("indicatorsList");

//Get IndicatorsList Items
let indicatorsBulletsArr = [...document.querySelectorAll("#indicatorsList li")];

//Loop Through Bullets
for (let i = 0; i < sliderImages.length; i++) {
  indicatorsBulletsArr[i].addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  });
}

//=======================================================================================
//Functions

//Trigger Checker Function
checker();

//Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
nextButton.addEventListener("click", nextSlide);

//Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
prevButton.addEventListener("click", prevSlide);

//Checker Function
function checker() {
  //Set Slide Number
  slideNumber.textContent = `Slide #${currentSlide} of ${sliderImages.length}`;

  // call function of remove all active classes
  removeActive();

  //Set Active Class On Active Image
  sliderImages[currentSlide - 1].classList.add("active");

  //Set Active Class On Active Indicator
  indicatorsNewUL.children[currentSlide - 1].classList.add("active");

  //Check if Current Slide is First
  if (currentSlide == 1) {
    //Set Disabled Class On Previous Button
    prevButton.classList.add("disabled");
  } else prevButton.classList.remove("disabled");

  //Check if Current Slide is Last
  if (currentSlide == sliderImages.length) {
    //Set Disabled Class On Next Button
    nextButton.classList.add("disabled");
  } else nextButton.classList.remove("disabled");
}

//Remove All Active Classes From Images And Indicators
function removeActive() {
  //Loop Through Images
  sliderImages.forEach((img) => img.classList.remove("active"));

  //Loop Through Indicators Bullets
  indicatorsBulletsArr.forEach((bullet) => bullet.classList.remove("active"));
}
