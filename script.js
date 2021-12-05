window.onload = function() {
    document.getElementsByClassName("carouselNavigationButton")[0].style.backgroundColor = "#0095F6";

    const carouselButtonInImage = document.getElementsByClassName('carouselButtonInImage');
    for(var i = 0; i < carouselButtonInImage.length; i++) {
        carouselButtonInImage[i].onclick = carouselNavigation;
    }
}

function carouselNavigation(e){
    console.log(e.target)
    if(e.target.classList.contains("carouselNext")){
        console.log("next");
    }
    else if (e.target.classList.contains("carouselPrev")){
        console.log("prev");
    }
}