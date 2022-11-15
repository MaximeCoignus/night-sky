import { animate } from "./scrollDetector";
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div class="main-container">
    <div class="sub-container">
      <div class="sky">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
      </div>
    </div>
  </div>
`;

window.onload = () => {
  console.log("Page loaded!");
  animate();
};
