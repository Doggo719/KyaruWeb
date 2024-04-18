const scroller = document.querySelector('.wrapper');
const commentsBackgroundFade = document.querySelector('.commentsBackgroundDarken');
const comment1 = document.querySelector('#comment1');
const comment2 = document.querySelector('#comment2');
const comment3 = document.querySelector('#comment3');
const output = document.querySelector('.scrollValue');

/*var style = getComputedStyle(document.getElementsByClassName('wrapper')[0],null);
var value = style.getPropertyValue('scrollTop');*/

function startKyaruStandAnimation() {
    document.querySelector('.kyaruStand').classList.add("startKyaruStandAnimationClass");
}

function startChrIntroductionAnimation() {
    document.querySelector('.chrIntroduction div').classList.add("startChrIntroductionAnimationClass");
}

function startChrTitleAnimation() {
    document.querySelector('.chrTitle').classList.add("startChrTitleAnimationClass");
}

function backToTop() {
    scroller.scrollTop = 0; //safari
    scroller.documentElement.scrollTop = 0; //chrome, firefox, etc.
}

scroller.addEventListener("scroll", (event) => {
    output.textContent = `scrollTop: ${scroller.scrollTop}`;
    commentsBackgroundFade.style.opacity = (scroller.scrollTop-300)/200;
    //comment1.style.transform = "translateX("+scroller.scrollTop/100+"vw)";
    if(scroller.scrollTop >= 400 && scroller.scrollTop < 550) {
        comment1.style.transform = "translateX("+(((550-scroller.scrollTop)/15)+5)+"vw)";
        comment1.style.opacity = ((scroller.scrollTop-400)/150);
    } else if(scroller.scrollTop < 400) {
        comment1.style.transform = "translateX(15vw)";
        comment1.style.opacity = 0;
    } else {
        comment1.style.transform = "translateX(5vw)";
        comment1.style.opacity = 1;
    }

    if(scroller.scrollTop >= 550 && scroller.scrollTop < 700) {
        comment2.style.transform = "translateX("+(((scroller.scrollTop-700)/15)-5)+"vw)";
        comment2.style.opacity = ((scroller.scrollTop-550)/150);
    } else if(scroller.scrollTop < 550) {
        comment2.style.transform = "translateX(-15vw)";
        comment2.style.opacity = 0;
    } else {
        comment2.style.transform = "translateX(-5vw)";
        comment2.style.opacity = 1;
    }

    if(scroller.scrollTop >= 700 && scroller.scrollTop < 850) {
        comment3.style.transform = "translateX("+(((850-scroller.scrollTop)/15)+5)+"vw)";
        comment3.style.opacity = ((scroller.scrollTop-700)/150);
    } else if(scroller.scrollTop < 700) {
        comment3.style.transform = "translateX(15vw)";
        comment3.style.opacity = 0;
    } else {
        comment3.style.transform = "translateX(5vw)";
        comment3.style.opacity = 1;
    }

    if(scroller.scrollTop >= 1750) {
        document.querySelector('.kyaruStand').style.display = "block";
        startKyaruStandAnimation();

        /*setTimeout(() => {
            document.querySelector('.chrTitle').style.display = "block";
            startChrTitleAnimation();
            setTimeout(() => {
                document.querySelector('.chrIntroduction div').style.display = "block";
                startChrIntroductionAnimation();
            }, 200);
        }, 200);*/

        /*document.querySelector('.chrTitle').style.display = "block";
        startChrTitleAnimation();
        document.querySelector('.chrIntroduction div').style.display = "block";
        startChrIntroductionAnimation();*/

        document.querySelector('.chrTitle').style.display = "block";
        startChrTitleAnimation();
        setTimeout(() => {
            document.querySelector('.chrIntroduction div').style.display = "block";
            startChrIntroductionAnimation();
        }, 400);
    }
});

/*function test() {
    alert(scroller.scrollTop);
};

test();*/