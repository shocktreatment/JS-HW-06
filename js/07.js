const inPut = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inPut.addEventListener("input", () => {
  spanText.style.fontSize = inPut.value * (16 / 56) + "px";
});
