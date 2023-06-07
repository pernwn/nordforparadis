const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");


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





