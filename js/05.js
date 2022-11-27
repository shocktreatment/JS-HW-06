const input = document.querySelector("#name-input");
input.addEventListener("input", inputText);

const nameOut = document.querySelector("#name-output");

function inputText(x) {
    console.log(x.currentTarget.value);

    nameOut.textContent = x.currentTarget.value;
    if (x.currentTarget.value === '') {
        nameOut.textContent = "Anonymous";
    }
}
