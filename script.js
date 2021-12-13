window.onload = function() {
    projectsOpen();
    changeCurrentStyleMode();
    applyStyleMode();
    openSocialMedias();
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
function openSocialMedias(){
    document.getElementById("github").onclick = function(){
        window.open("https://github.com/VinnyStuff");
    }
    document.getElementById("linkedin").onclick = function(){
        window.open("https://www.linkedin.com/");
    }
    document.getElementById("playstore").onclick = function(){
        window.open("https://play.google.com/store/apps/developer?id=VinnyStuff");
    }
}

function changeCurrentStyleMode(){
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    document.getElementById("changeTheme").onclick = function(){
        console.log("click");
        if(moon.style.display == "none"){
            document.getElementById("moon").style.display = "block";
            document.getElementById("theme").setAttribute('href', "light.css");
            document.getElementById("sun").style.display = "none";
        }
        else if (sun.style.display == "none"){
            document.getElementById("sun").style.display = "block";
            document.getElementById("theme").setAttribute('href', "dark.css");
            document.getElementById("moon").style.display = "none";
        }
    }
}

function applyStyleMode(){
    const button = document.getElementById("changeCssFile");
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("theme").setAttribute('href', "dark.css");
        document.getElementById("moon").style.display = "none";
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        document.getElementById("theme").setAttribute('href', "light.css");
        document.getElementById("sun").style.display = "none";
    }
}