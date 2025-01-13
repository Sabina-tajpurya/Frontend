//access image
let slideImg = document.querySelectorAll("img")
//access button next and preview
let nextButton = document.querySelector(".next")
let previewButton = document.querySelector(".preview")
//access the indicators
let indicators = document.querySelectorAll(".dot")
let counter = 0;
let deleteInterval;
//function for the next button
nextButton.addEventListener("click", slidenext);
function slidenext() {
    slideImg[counter].style.animation = "next1 0.5s ease-in forwards"
    if (counter >= slideImg.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    updateIndicator()
}
//function for the previewbutton
previewButton.addEventListener("click", slidepreview);
function slidepreview() {
    slideImg[counter].style.animation = "preview1 0.5s ease-in forwards"
    if (counter === 0) {
        counter = slideImg.length - 1
    }
    else {
        counter--;
    }
    slideImg[counter].style.animation = "preview2 0.5s ease-in forwards"
    updateIndicator()
}
//auto slides images
function autoslides() {
    deleteInterval = setInterval(slidenext, 1000)
}
autoslides();
//stop auto slides hover
const container = document.querySelector(".slide-container")
container.addEventListener("mouseover", function () {
    clearInterval(deleteInterval);
})
// resume auto slides 
container.addEventListener("mouseout", autoslides);
//update active indicator
function updateIndicator() {
    indicators.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index == counter) {
            dot.classList.add("active");
        }
    })
}
//add event click indicator
function switchImage(currentImage) {

    updateIndicator()
    indicators.forEach((dot) => dot.classList.remove("active"));
    currentImage.classList.add("active");
    let imageId = parseInt(currentImage.getAttribute("attr"), 10)
    if (imageId > counter) {
        slideImg[counter].style.animation = "next1 0.5s ease-in forwards";
        counter = imageId;
        slideImg[counter].style.animation = "next2 0.5s ease-in forwards";
    }
    else if (imageId < counter) {
        slideImg[counter].style.animation = "preview1 0.5s ease-in forwards";
        counter = imageId;
        slideImg[counter].style.animation = "preview2 0.5s ease-in forwards";
    }
 //updateIndicator() 


}