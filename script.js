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
    console.log(pswLength)
}

let maxTime = 20;
let interval = setInterval(timer, 1000);

function timer(){
    let otpt = document.getElementById("timer");
    let img = document.getElementById("img");
    let form = document.getElementById("psw");
    let mQ = window.matchMedia("(max-width: 445px)")
    maxTime = maxTime - 1;
    if(maxTime == 0){
        clearInterval(interval);
        document.getElementById("stat").innerHTML = "Bomb Exploded";
        img.src = "Exploded.png";
        img.style.marginLeft = "5px";
        img.style.width = "280px";

        if(mQ.matches){
            img.style.width = "230px";
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
            if(mQ.matches){
                img.style.width = "250px";
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
        alert("Bomb Defused");
        input.value = "";
        pswGen();
        maxTime = 21;
    }
}
