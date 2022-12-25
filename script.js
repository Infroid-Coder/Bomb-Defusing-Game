let pswValue, random, psw;
let pswLength = 6;
let scoreOtpt = document.getElementById("scr");
localStorage.score;
function pswGen(){
    let abc = "1234567890";

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

let secs = 21;
let mins = "00";
let interval = setInterval(timer, 1000);

function timer(){
    let otpt = document.getElementById("timer");
    let img = document.getElementById("img");
    let psw = document.getElementById("psw");
    let form = document.getElementById("enter");
    let mQ1 = window.matchMedia("(max-width: 445px)");
    let mQ2 = window.matchMedia("(max-width: 400px)");
    let mQ3 = window.matchMedia("(max-width: 360px)");

    secs = secs - 1;
    if(secs == 0){
        clearInterval(interval);
        document.getElementById("stat").innerHTML = "Status: Bomb Exploded";
        img.src = "Exploded.png";
        img.style.marginLeft = "5px";
        img.style.width = "380px";
        psw.style.display = "none";
        form.style.display = "none";

        if(Number(localStorage.score) >= 5){
            localStorage.score = localStorage.score - 5;
            scoreOtpt.innerHTML = localStorage.score;
        } else{
            localStorage.score = localStorage.score - localStorage.score;
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
            document.getElementById("stat").innerHTML = "Status: ";
            secs = 21;
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
    if(secs < 10){
        secs = "0" + secs;
    }
    if(secs > 60){
        mins = Number(mins) + 1;
        secs = secs - 60;
        if(Number(mins) < 10){
            mins = "0" + mins;
        }
    }
    otpt.innerHTML = mins + ":" + secs;

}

let input = document.getElementById("enter");
input.onkeyup = function(){
    if(input.value == pswValue){
        document.getElementById("stat").innerHTML = "Status: Bomb Defused";
        input.value = "";
        pswGen();
        setTimeout(function(){
            document.getElementById("stat").innerHTML = "Status: ";
        },1000);
            if(secs >= 15){
                localStorage.score = Number(localStorage.score) + 10;
                GrayOutLL();
                Harden();
            }
            if(secs >= 10 && secs < 15){
                localStorage.score = Number(localStorage.score) + 8;
                GrayOutLL();
                Harden();
            }
            if(secs >= 5 && secs < 10){
                localStorage.score = Number(localStorage.score) + 6;
                GrayOutLL();
                Harden();
            }
            if(secs < 5){
                localStorage.score = Number(localStorage.score) + 5;
                GrayOutLL();
                Harden();
            }
            scoreOtpt.innerHTML = localStorage.score;
            secs = 21;
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
        ll1.style.backgroundSize = "45px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "45px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "45px";
    }
    if(Number(localStorage.score) >= 100 && Number(localStorage.score) < 200){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line2.png")';
        ll3.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "45px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "45px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "45px";
    }
    if(Number(localStorage.score) >= 200 && Number(localStorage.score) < 300){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'url("Life line2.png")';
        ll3.style.background = 'linear-gradient(rgb(121, 121, 121, 0.4),rgb(121, 121, 121, 0.4)) , url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "45px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "45px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "45px";
    }
    if(Number(localStorage.score) >= 300){
        ll1.style.background = 'url("Life line1.png")';
        ll2.style.background = 'url("Life line2.png")';
        ll3.style.background = 'url("Life line3.png")';
        ll1.style.backgroundRepeat = "no-repeat";
        ll1.style.backgroundSize = "45px";
        ll2.style.backgroundRepeat = "no-repeat";
        ll2.style.backgroundSize = "45px";
        ll3.style.backgroundRepeat = "no-repeat";
        ll3.style.backgroundSize = "45px";
    }
}
function lifeLines(){
    ll1.onclick = function(){
        if(Number(localStorage.score) >= 100){
            secs = secs + 4;
            localStorage.score = Number(localStorage.score) - 100;
            scoreOtpt.innerHTML = localStorage.score;
            GrayOutLL();
        }
    }
    ll2.onclick = function(){
        if(Number(localStorage.score) >= 200){
            secs = secs + 6;
            localStorage.score = Number(localStorage.score) - 200;
            scoreOtpt.innerHTML = localStorage.score;    
            GrayOutLL();
        }
    }
    ll3.onclick = function(){
        if(Number(localStorage.score) >= 300){
            secs = secs + 11;
            localStorage.score = Number(localStorage.score) - 300;
            scoreOtpt.innerHTML = localStorage.score;
            GrayOutLL();
        }
    }
}
function Harden(){
    if(localStorage.score >= 200){
        pswLength = 7;
    }
    if(localStorage.score >= 300){
        secs = 20;
    }
    if(localStorage.score >= 400){
        secs = 19;
    }
    if(localStorage.score >= 500){
        pswLength = 8;
    }
    if(localStorage.score >= 1000){
        pswLength = 7;
        secs = 18;
    }
}
let t = "-1";
function Pause(){
    let trigger = document.getElementById("overlay4");
    let pauseScr = document.getElementById("paused");

    pauseScr.style.display = "block";
    clearInterval(interval);
    document.getElementById("img").src = "BombP.png";
    t = "1";
}
if(t === "-1"){
    document.getElementById("paused").onclick = function(){
        document.getElementById("paused").style.display = "none";
        t = "1";
        interval = setInterval(timer, 1000);
        document.getElementById("img").src = "Bomb.gif";
    }
}

lifeLines();
GrayOutLL();
Harden();
