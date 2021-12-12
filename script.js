window.onload = function() {
    projectsOpen();
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
    
}