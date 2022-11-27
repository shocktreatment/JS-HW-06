const body = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeBtn.addEventListener("click", () => {
    console.log("wow");
    
    const newColor = getRandomHexColor();

    body.style.background = newColor;
    textColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
