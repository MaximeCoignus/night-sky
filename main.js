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
  const stars3 = document.querySelector(".stars3");

  let scrolling = false;

  const activateScroll = () => {
    scrolling = true;
  };

  window.addEventListener("scroll", activateScroll);

  const animate = () => {
    requestAnimationFrame(animate);
    if (scrolling) {
      updateScrollStatus();
    }
  };

  const readScroll = () => {
    let prior = false;
    let timer = undefined;

    const scrollSpeed = 1;
    return function _updateScrollStatus() {
      if (!prior) {
        prior = window.scrollY;
      } else {
        if (Math.abs(window.scrollY - prior) > scrollSpeed) {
          const actualSpeed = Math.abs(window.scrollY - prior);
          if (actualSpeed <= 200) {
            stars3.style.height = `${actualSpeed}px`;
          }
          if (timer) {
            clearTimeout(timer);
            timer = undefined;
          }
          timer = setTimeout(() => {
            stars3.style.height = "3px";
            timer = undefined;
          }, 50);
        } else {
          if (!timer) {
            stars3.style.height = "3px";
            scrolling = false;
          }
        }
        prior = window.scrollY;
      }
    };
  };

  const updateScrollStatus = readScroll();

  animate();
};
