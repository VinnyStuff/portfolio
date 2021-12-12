window.onload = function() {
    projectsOpen();
    changeCurrentStyleMode();
    applyStyleMode();
}

function projectsOpen(){
    document.getElementById("asteroidSpace").onclick = function(){
        window.open("https://play.google.com/store/apps/details?id=com.VinnyStuff.AsteroidSpaceGooglePlay&utm_source=vinnystuff.com&utm_campaign=site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1");
    }
    document.getElementById("bmi").onclick = function(){
        window.open("https://vinnystuff.github.io/BMI-BMR-Tracker/");
    }
    document.getElementById("athleticsCalculator").onclick = function(){
        window.open("https://vinnystuff.github.io/athletics-calculator/");
    }
}

function changeCurrentStyleMode(){
    const button = document.getElementById("changeCssFile");
    button.onclick = function (){
        if(button.innerText == "DARK MODE"){
            document.getElementById("theme").setAttribute('href', "dark.css");
            button.innerText = "LIGHT MODE";
        }
        else if(button.innerText == "LIGHT MODE"){
            document.getElementById("theme").setAttribute('href', "light.css");
            button.innerText = "DARK MODE";
        }
    }
}

function applyStyleMode(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("theme").setAttribute('href', "dark.css");
        button.innerText = "LIGHT MODE";
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        document.getElementById("theme").setAttribute('href', "light.css");
        button.innerText = "DARK MODE";
    }
}