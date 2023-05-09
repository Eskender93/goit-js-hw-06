function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backGround = document.querySelector(".widget");
const textColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", () => {
  backGround.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
});
