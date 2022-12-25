let Ts = document.querySelectorAll("#t");
let Ls = document.querySelectorAll("#l");
let Ss = document.querySelectorAll("#s");
let E1 = document.querySelector(".lifelines");
let E2 = document.querySelector(".score");
let E3 = document.querySelector(".timer");

for(let i = 0; i < Ls.length; i++){
    Ls[i].onclick = function(){
        E1.style.border = "solid 3px yellow";

        setTimeout(function(){
            E1.style.border = "solid 2px white";
        },600);
    }
}
for(let i = 0; i < Ss.length; i++){
    Ss[i].onclick = function(){
        E2.style.border = "solid 3px yellow";

        setTimeout(function(){
            E2.style.border = "solid 2px white";
        },600);
    }
}
for(let i = 0; i < Ts.length; i++){
    Ts[i].onclick = function(){
        E3.style.border = "solid 3px yellow";

        setTimeout(function(){
            E3.style.border = "solid 2px white";
        },600);
    }
}