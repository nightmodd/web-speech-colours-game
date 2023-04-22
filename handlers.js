import { isValidColor } from "./colors.js";

const body = document.querySelector("body");
let previousColor = "";
let colorSpan;
let firstTime = true;
export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript; //track the results till came up with this

  // lowercase everything
  let color = words.toLowerCase();
  // replace all the spaces with nothing
  color = color.replace(/\s/g, "");
  if (firstTime) {
    previousColor = color;
    firstTime = false;
  }
  //check if its the same color

  //then check if its a valid color
  if (!isValidColor(color)) return;

  //check if its the same color
  //then show the UI for that color
  if (previousColor !== color && previousColor !== "") {
    colorSpan = document.getElementById(`${previousColor}`);
    colorSpan.classList.remove("got");
    console.log("removed");
    previousColor = color;
  }

  colorSpan = document.getElementById(`${color}`);
  colorSpan.classList.add("got");
  body.style.backgroundColor = color;

  console.log(color);
  console.log(previousColor);
}
