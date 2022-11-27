const logicForm = document.querySelector(".login-form");
// const loginBtn = document.querySelector('.oops');
logicForm.addEventListener('submit', submitFunction)

function submitFunction(event) {
    console.log("submit of form!");
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        console.log();
        return alert('Будь ласка, заповніть всі поля')
    }

    console.log(email.value, password.value);
    event.currentTarget.reset();
}