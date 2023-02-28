/* eslint-disable */
import "bootstrap";
import "./style.css";

let symbols = ["♦", "♥", "♠", "♣"];
let numbers = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //to generate random card
  let randomitem = symbols[Math.floor(Math.random() * symbols.length)];
  // to generate symbols
  let superior = document.getElementById("superior");
  superior.innerHTML = randomitem;

  let inferior = document.getElementById("inferior");
  inferior.innerHTML = randomitem;

  //to generate number and letter

  let randomletter = numbers[Math.floor(Math.random() * numbers.length)];
  let letter = document.getElementById("number");
  letter.innerHTML = randomletter;
  // for colors of the cards eigther red or black

  if (randomitem == "♦" || randomitem == "♥") {
    inferior.style.color = "red";
    superior.style.color = "red";
  } else {
    inferior.style.color = "black";
    superior.style.color = "black";
  } //console.log("Hello Rigo from the console!");
};
//generate bottom
let change = document.getElementById("change");
change.addEventListener("click", onload);

let time = document.getElementById("time");
time.addEventListener("click", interval);

function interval() {
  setInterval(onload, 2000);
}
