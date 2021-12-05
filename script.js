window.onload = function() {
    const carouselNavigationButtons = document.getElementsByClassName("carouselNavigationButton");
    carouselNavigationButtons[0].classList.add("carouselNavigationButtonActive");

    const carouselButtonInImage = document.getElementsByClassName('carouselButtonInImage');
    for(let i = 0; i < carouselButtonInImage.length; i++) {
        carouselButtonInImage[i].onclick = carouselNavigation;
    }
   checker(carouselNavigationButtons);
}

function carouselNavigation(e){
    let carouselNavigationButton = document.getElementsByClassName("carouselNavigationButton");

    for(let i = 0; i < carouselNavigationButton.length; i++){
        if(carouselNavigationButton[i].classList.contains("carouselNavigationButtonActive")){
            if (e.target.classList.contains("carouselNext")){
                if (i < carouselNavigationButton.length - 1){
                    carouselNavigationButton[i].classList.remove("carouselNavigationButtonActive");
                    carouselNavigationButton[i + 1].classList.add("carouselNavigationButtonActive");
                }
            }
            else if(e.target.classList.contains("carouselPrev")){
                if (i > 0){
                    carouselNavigationButton[i].classList.remove("carouselNavigationButtonActive");
                    carouselNavigationButton[i - 1].classList.add("carouselNavigationButtonActive");
                }
            }
            checker(carouselNavigationButton);
            break;
        }
    }
}

function checker(carouselNavigationButtons){
    if (carouselNavigationButtons[0].classList.contains("carouselNavigationButtonActive")){
        document.getElementsByClassName("carouselPrev")[0].style.display = "none";
    }
    else{
        document.getElementsByClassName("carouselPrev")[0].style.display = "block";
    }
    if (carouselNavigationButtons[carouselNavigationButtons.length - 1].classList.contains("carouselNavigationButtonActive")){
        document.getElementsByClassName("carouselNext")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("carouselNext")[0].style.display = "block";
    }

}