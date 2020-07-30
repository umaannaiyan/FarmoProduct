let btnClickMe=document.querySelector("#btnBg");
let body=document.querySelector("body");
btnClickMe.onclick = function(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;  
    h1.style.color= "black"; 
    h3.style.color = "black"; 
    ul.style.color= "black"; 
    li.style.color = "black"; 
}

let btnText=document.querySelector("#btnText");
// let body1=document.querySelector("#body");
let h1=document.querySelector("#h1");
let h3=document.querySelector("#h3");
let ul=document.querySelector("#ul");
let li=document.querySelector("#li");
btnText.onclick = function(){
  
    body.style.background = "white";

    // errMsg.style.color = "green";
    h1.style.color= "red"; 
    h3.style.color = "green"; 
    ul.style.color= "grey"; 
    li.style.color = "cyan";  
}
