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
  const stars1 = document.querySelector(".stars");
  const stars2 = document.querySelector(".stars2");
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
            stars1.style.height = `${actualSpeed}px`;
            stars2.style.height = `${actualSpeed}px`;
            stars3.style.height = `${actualSpeed}px`;
          }
          if (timer) {
            clearTimeout(timer);
            timer = undefined;
          }
          timer = setTimeout(() => {
            stars1.style.height = "1px";
            stars2.style.height = "2px";
            stars3.style.height = "3px";
            timer = undefined;
          }, 10);
        } else {
          if (!timer) {
            stars1.style.height = "1px";
            stars2.style.height = "2px";
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
