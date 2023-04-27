window.onload = function() {
    projectsLaunch();
    openProjectCode();
    changeCurrentStyleMode();
    applyStyleModeWhenPageIsOpen();
    openSocialMedias();
    buttonScroller();   
}

function projectsLaunch(){
    document.querySelectorAll('.vrikaQuizLaunch').forEach(vrikaQuiz => {
        vrikaQuiz.addEventListener('click', () => {
            window.open("https://vinnystuff.github.io/trivia-game/");
        });
    });    
    
    document.querySelectorAll('.asteroidSpaceLaunch').forEach(asteroidSpace => {
        asteroidSpace.addEventListener('click', () => {
            window.open("https://play.google.com/store/apps/details?id=com.VinnyStuff.AsteroidSpaceGooglePlay&utm_source=vinnystuff.com&utm_campaign=site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1");
        });
    });    

    document.querySelectorAll('.bmiLaunch').forEach(bmi => {
        bmi.addEventListener('click', () => {
            window.open("https://vinnystuff.github.io/BMI-BMR-Tracker/");
        });
    });    

    document.querySelectorAll('.athleticsCalculatorLaunch').forEach(athleticsCalculator => {
        athleticsCalculator.addEventListener('click', () => {
            window.open("https://vinnystuff.github.io/athletics-calculator/");
        });
    }); 

    document.querySelectorAll('.animeWeekProjectLaunch').forEach(athleticsCalculator => {
        athleticsCalculator.addEventListener('click', () => {
            window.open("https://vinnystuff.github.io/week-anime-project/");
        });
    }); 

    document.querySelectorAll('.animeWeeklyLaunch').forEach(athleticsCalculator => {
        athleticsCalculator.addEventListener('click', () => {
            window.open("https://vinnystuff.github.io/anime-weekly/");
        });
    }); 
}
function openProjectCode(){
    document.getElementById("vrikaQuizGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/trivia-game");
    }
    document.getElementById("asteroidSpaceGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/Asteroid-Space");
    }
    document.getElementById("bmiGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/BMI-BMR-Tracker");
    }
    document.getElementById("athleticsCalculatorGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/athletics-calculator");
    }
    document.getElementById("animeWeekProjectGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/week-anime-project");
    }
    document.getElementById("animeWeeklyGithub").onclick = function(){
        window.open("https://github.com/VinnyStuff/anime-weekly/");
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
    const theme = document.getElementById("theme");

    document.getElementById("changeTheme").onclick = function(){
        if(theme.getAttribute('href') == "light.css"){//change to dark mode
            theme.setAttribute('href', "dark.css");
            sun.style.display = "block";
            moon.style.display = "none";
        }
        else if (theme.getAttribute('href') == "dark.css"){
            theme.setAttribute('href', "light.css");
            sun.style.display = "none";
            moon.style.display = "block";
        }
    }
}

function applyStyleModeWhenPageIsOpen(){
    const button = document.getElementById("changeCssFile");
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("theme").setAttribute('href', "dark.css");
        document.getElementById("sun").style.display = "block";
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        document.getElementById("theme").setAttribute('href', "light.css");
        document.getElementById("moon").style.display = "block";
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