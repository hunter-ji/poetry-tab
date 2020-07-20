import "./index.css";

import ly from "./lunyu.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let inner, origin;

try {
  const target = ly[getRandomInt(ly.length)];
  inner = target.paragraphs[getRandomInt(target.paragraphs.length)];
  origin = target.chapter;
} catch (error) {
  console.log(error);
  inner = "子曰：“人无远虑，必有近忧。”";
  origin = "卫灵公篇";
}

document.getElementById("inner").innerHTML = inner;
document.getElementById("origin").innerHTML = origin;
