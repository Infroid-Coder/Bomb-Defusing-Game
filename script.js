let pswValue, random, psw;
let scoreOtpt = document.getElementById("scr");
localStorage.score;
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

let maxTime = 21;
let interval = setInterval(timer, 1000);

function timer(){
    let otpt = document.getElementById("timer");
    let img = document.getElementById("img");
    let psw = document.getElementById("psw");
    let form = document.getElementById("enter");
    let mQ1 = window.matchMedia("(max-width: 445px)");
    let mQ2 = window.matchMedia("(max-width: 400px)");
    let mQ3 = window.matchMedia("(max-width: 360px)");

    maxTime = maxTime - 1;
    if(maxTime == 0){
        clearInterval(interval);
        document.getElementById("stat").innerHTML = "Bomb Exploded";
        img.src = "Exploded.png";
        img.style.marginLeft = "5px";
        img.style.width = "380px";
        psw.style.display = "none";
        form.style.display = "none";

        if(Number(localStorage.score) >= 5){
            localStorage.score = localStorage.score - 5;
            scoreOtpt.innerHTML = localStorage.score;
        }

        if(mQ1.matches){
            img.style.width = "270px";
        }
        if(mQ2.matches){
            img.style.width = "220px";
        }
        if(mQ3.matches){
            img.style.width = "210px";
        }
        setTimeout(function(){
            otpt.innerHTML = "00:20";
            document.getElementById("stat").innerHTML = "";
            maxTime = 21;
            interval = setInterval(timer, 1000);
            pswGen();
            img.src = "Bomb.gif";
            img.style.marginLeft = "60px";
            img.style.width = "300px";
            psw.style.display = "inline-block";
            form.style.display = "inline-block";
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
                GrayOutLL();
                Harden();
            }
            if(maxTime >= 10 && maxTime < 15){
                localStorage.score = Number(localStorage.score) + 8;
                GrayOutLL();
                Harden();
            }
            if(maxTime >= 5 && maxTime < 10){
                localStorage.score = Number(localStorage.score) + 6;
                GrayOutLL();
                Harden();
            }
            if(maxTime < 5){
                localStorage.score = Number(localStorage.score) + 5;
                GrayOutLL();
                Harden();
            }
            scoreOtpt.innerHTML = localStorage.score;
            maxTime = 21;
            Harden();
    }
}
scoreOtpt.innerHTML = localStorage.score;
if(localStorage.score == undefined){
    localStorage.score = 0;
}

let ll1 = document.getElementById("overlay1");
let ll2 = document.getElementById("overlay2");
let ll3 = document.getElementById("overlay3");

function GrayOutLL(){
    if(Number(localStorage.score) < 100){
        ll1.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line1.png")';
        ll2.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line2.png")';
        ll3.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "40px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "40px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "40px";
    }
    if(Number(localStorage.score) >= 100 && Number(localStorage.score) < 200){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line2.png")';
        ll3.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "40px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "40px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "40px";
    }
    if(Number(localStorage.score) >= 200 && Number(localStorage.score) < 300){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'url("Life line2.png")';
        ll3.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "40px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "40px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "40px";
    }
    if(Number(localStorage.score) >= 300){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'url("Life line2.png")';
        ll3.style.background = 'url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "40px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "40px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "40px";
    }
}
function lifeLines(){
    ll1.onclick = function(){
        if(Number(localStorage.score) >= 100){
            maxTime = maxTime + 4;
            localStorage.score = Number(localStorage.score) - 100;
            scoreOtpt.innerHTML = localStorage.score;
            GrayOutLL();
        }
    }
    ll2.onclick = function(){
        if(Number(localStorage.score) >= 200){
            maxTime = maxTime + 6;
            localStorage.score = Number(localStorage.score) - 200;
            scoreOtpt.innerHTML = localStorage.score;    
            GrayOutLL();
        }
    }
    ll3.onclick = function(){
        if(Number(localStorage.score) >= 300){
            maxTime = maxTime + 11;
            localStorage.score = Number(localStorage.score) - 300;
            scoreOtpt.innerHTML = localStorage.score;
            GrayOutLL();
        }
    }
}
function Harden(){
    if(localStorage.score >= 300){
        maxTime = 20;
    }
    if(localStorage.score >= 400){
        maxTime = 19;
    }
    if(localStorage.score >= 500){
        maxTime = 18;
    }
}
lifeLines();
GrayOutLL();
Harden();
