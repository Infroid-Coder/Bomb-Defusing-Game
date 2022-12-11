let pswValue, random, psw;
function pswGen(){
    let abc = "1234567890";
    let pswLength = 6;

    if(document.getElementById("psw").innerHTML == ""){
        for(let i = 0; i < pswLength; i++){
            random = Math.floor(Math.random() * 10);
            psw = abc.charAt(random);
            document.getElementById("psw").innerHTML += psw;
        }
        pswValue = document.getElementById("psw").innerHTML;
    }   else{
        document.getElementById("psw").innerHTML = "";
        for(let i = 0; i < pswLength; i++){
            random = Math.floor(Math.random() * 10);
            psw = abc.charAt(random);
            document.getElementById("psw").innerHTML += psw;
        }
        pswValue = document.getElementById("psw").innerHTML;
    }
}

let maxTime = 20;
let interval = setInterval(timer, 1000);

function timer(){
    let otpt = document.getElementById("timer");
    let img = document.getElementById("img");
    let form = document.getElementById("psw");
    let mQ1 = window.matchMedia("(max-width: 445px)");
    let mQ2 = window.matchMedia("(max-width: 400px)");
    let mQ3 = window.matchMedia("(max-width: 360px)");

    maxTime = maxTime - 1;
    if(maxTime == 0){
        clearInterval(interval);
        document.getElementById("stat").innerHTML = "Bomb Exploded";
        img.src = "Exploded.png";
        img.style.marginLeft = "5px";
        img.style.width = "280px";

        if(mQ1.matches){
            img.style.width = "210px";
        }
        if(mQ2.matches){
            img.style.width = "160px";
        }
        if(mQ3.matches){
            img.style.width = "150px";
        }
        setTimeout(function(){
            otpt.innerHTML = "00:20";
            document.getElementById("stat").innerHTML = "";
            maxTime = 20;
            interval = setInterval(timer, 1000);
            pswGen();
            img.src = "Bomb.gif";
            img.style.marginLeft = "60px";
            img.style.width = "300px";
            if(mQ1.matches){
                img.style.width = "250px";
            }
            if(mQ2.matches){
                img.style.width = "230px";
            }
            if(mQ3.matches){
                img.style.width = "200px";
            }
        }, 5000)
    }
    if(maxTime < 10){
        maxTime = "0" + maxTime;
    }

    otpt.innerHTML = "00:" + maxTime;

}

let input = document.getElementById("enter");
let scoreOtpt = document.getElementById("scr");
localStorage.score;
input.onkeyup = function(){
    if(input.value == pswValue){
        document.getElementById("stat").innerHTML = "Bomb Defused";
        input.value = "";
        pswGen();
        setTimeout(function(){
            document.getElementById("stat").innerHTML = "";
        },1000);
            if(maxTime >= 15){
                localStorage.score = Number(localStorage.score) + 10;
            }
            if(maxTime >= 10 && maxTime < 15){
                localStorage.score = Number(localStorage.score) + 8;
            }
            if(maxTime >= 5 && maxTime < 10){
                localStorage.score = Number(localStorage.score) + 6;
            }
            if(maxTime < 5){
                localStorage.score = Number(localStorage.score) + 5;
            }
            scoreOtpt.innerHTML = localStorage.score;
            maxTime = 21;
    }
}
scoreOtpt.innerHTML = localStorage.score;
if(localStorage.score == undefined){
    localStorage.score = 0;
}
