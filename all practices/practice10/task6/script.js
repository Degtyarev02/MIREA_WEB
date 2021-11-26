const submit = document.querySelector('.submit');
let emailField = document.querySelector('.email');
let passwordField = document.querySelector('.password');
let errorMessage = document.querySelector('.error')

submit.onclick = function () {
    let email = emailField.value;
    let password = passwordField.value;
    let re = /\S+@\S+\.\S+/;
    if (email == null || email === "") {
        errorMessage.textContent = "Email can't be empty";
        emailField.classList.add("apply-shake");
    } else if (!re.test(email)) {
        errorMessage.textContent = "Email is invalid";

        emailField.classList.add("apply-shake");
    } else if (password == null || password === "") {
        errorMessage.textContent = "Password can't be empty";

        passwordField.classList.add("apply-shake");
    } else {

        emailField.classList.remove("apply-shake");
        passwordField.classList.remove("apply-shake");
        errorMessage.textContent = "";
        window.location.href = 'https://www.google.ru';
    }
}