
/* This Code designed by https: //naim.vercel.app  ---
 Copyright 2023 By Naim All Rights Reserved.
Give Me Proper credit when You use this code By unchanging The FOOTER.
*/



let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let textClicked = document.querySelector(".textClicked");
let quote = document.querySelector(".quote");
let audio1 = document.querySelector(".a1");
let audio2 = document.querySelector(".a2");
let audio3 = document.querySelector(".a3");
let clear = document.querySelector(".clear");
let textArea = document.querySelector(".textArea");

btn1.addEventListener("click",()=>{
 textClicked.textContent = "You clicked A"
 quote.textContent = "A তে আপেল";
 textArea.style.display = "block";
 btn1.style.width = "25%";
 btn2.style.width = "";
 btn3.style.width = "";
 audio1.play();
})
btn2.addEventListener("click", () => {
 textClicked.textContent = "You clicked B"
 quote.textContent = "B তে ব্যাগ"
 textArea.style.display = "block";
 btn2.style.width = "25%";
 btn1.style.width = "";
 btn3.style.width = "";
 audio2.play();
})
btn3.addEventListener("click", () => {
 textClicked.textContent = "You clicked C"
 quote.textContent = "C তে ক্যাট"
 textArea.style.display = "block";
 btn3.style.width = "25%";
 btn2.style.width = "";
 btn1.style.width = "";
 audio3.play();
})
clear.addEventListener("click", ()=>{
 textArea.style.display = "none";
 btn3.style.width = "";
 btn2.style.width = "";
 btn1.style.width = "";
})
