/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
function excuseGenerator() {
  let who = ["The dog", "My grandma", "His dragon", "My bird"];
  let whoIcon = [
    '<i class="fa-solid fa-dog"></i>',
    "My grandma",
    '<i class="fa-solid fa-dragon"></i>',
    '<i class="fa-solid fa-crow"></i>',
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  return (
    whoIcon[whoRandom] +
    " " +
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom]
  );
}
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};
