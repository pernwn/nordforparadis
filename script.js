const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");
const burgerMenu = document.getElementById("burgerMenu");
const burger = document.getElementById("navMobile");
const logo = document.getElementById("mobilLogo");
const x = document.getElementById("close");


//Tryk på pil og scroll ned til om sektion
function scrollDown() {
    window.location = "#om";
}


//VELKOMST AFHÆNGIG AF TID PÅ DAGEN – https://www.studentstutorial.com/javascript/javascript-wish-as-per-time.php / https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif 
setTimeout(greetMe);
setTimeout(changeTxt, 3000);

function greetMe() {

    const time = new Date().getHours();
    let greeting;
    if (time < 06) {
        greeting = "Godnat!";
    } else if (time < 10) {
        greeting = "Godmorgen!";
    } else if (time < 12) {
        greeting = "Godmiddag!";
    } else if (time < 18) {
        greeting = "Godeftermiddag!";
    } else {
        greeting = "Godaften!";
    }

    nfp.style.display = "none";
    nfp.style.animationName = "fadeIn";

    hello.innerHTML = greeting;

}


function changeTxt() {
    nfp.style.display = "block";
    hello.style.display = "none";
}



//Aktiverer burgermenu –– TODO: skal klikke 2 gange før det virker ordenligt OG efter første click er curser hele vejen 

burgerMenu.style.visibility = 'hidden';
x.style.visibility = "hidden";

burger.addEventListener('click', menuFunction);
x.addEventListener('click', menuFunction);

let visible = false;

function menuFunction() {
    if (visible == false) {
        x.style.visibility = 'hidden';
        burger.style.visibility = 'visible';

        burgerMenu.style.animationName = 'slideOut';

        logo.style.visibility = 'visible';
        logo.style.animationName = 'slideIn';
        
        visible = true;


    } else {
        x.style.visibility = 'visible';
        burger.style.visibility = 'hidden';

        burgerMenu.style.visibility = 'visible';
        burgerMenu.style.animationName = "slideIn";
        
        logo.style.visibility = 'hidden';
        logo.style.animationName = 'slideOut';

        visible = false;
    }


}

//x.addEventListener('click', reload);

//Fjerner burgermenu TODO:

function reload() {
    window.location = window.location;
    
    
    burgerMenu.style.animationName = 'slideOut';

    burger.style.visibility = 'visible';
    burger.style.animationName = 'slideIn';

    logo.style.visibility = 'visible';
    logo.style.animationName = 'slideIn';

}






