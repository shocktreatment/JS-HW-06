const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    console.log("Input lost focus");
    console.log(event.currentTarget.value.length);

    if (input.value.length === Number(input.dataset.length)) {
        console.log("bravooo!!!");
        input.classList.add('valid')
        input.classList.remove("invalid");
    } else {
        console.log('XxXxX')
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}