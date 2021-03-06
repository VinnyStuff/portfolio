window.onload = function() {
    projectsOpen();
    changeCurrentStyleMode();
    applyStyleModeWhenPageIsOpen();
    openSocialMedias();
    buttonScroller();
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
        window.open("https://www.linkedin.com/in/vinnycios-medeiros-20321422b");
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

function applyStyleModeWhenPageIsOpen(){
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

function buttonScroller(){
    const buttons = document.getElementById("tabsBar");
    const home = tabsBar.getElementsByTagName("button")[0];
    const aboutMe = tabsBar.getElementsByTagName("button")[1];
    const myProjects = tabsBar.getElementsByTagName("button")[2];
    aboutMe.addEventListener('click', function () {
        document.getElementsByClassName("aboutMe")[0].scrollIntoView({behavior: "smooth", block: "center"});
    });
    myProjects.addEventListener('click', function () {
        document.getElementById("projects").scrollIntoView({behavior: "smooth"});
    });
}