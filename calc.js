"use strict";

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let result = document.querySelector("#result");
let reset = document.querySelector("#rset");
let article = document.querySelector("#article");
let hide = document.querySelector(".hide");

plus.addEventListener("click", () => {
  result.textContent = Number(num1.value) + Number(num2.value);
  result.style.cssText = "background:red; padding:10px";
});

minus.addEventListener("click", () => {
  result.textContent = Number(num1.value) - Number(num2.value);
  result.style.cssText = "background:red; padding:10px";
});

multiplication.addEventListener("click", () => {
  result.textContent = Number(num1.value) * Number(num2.value);
  result.style.cssText = "background:red; padding:10px";
});

division.addEventListener("click", () => {
  result.textContent = Number(num1.value) / Number(num2.value);
  result.style.cssText = "background:red; padding:10px";
});

reset.addEventListener("click", function () {
  num1.value = "0";
  num2.value = "0";
  result.innerText = "";
  result.style.cssText = "";
});

hide.addEventListener("click", function () {
  num1.value = "0";
  num2.value = "0";
  result.innerText = "";
  result.style.cssText = "";
});
