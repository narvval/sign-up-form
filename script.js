
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let form = document.getElementById('form');
let confirmError = document.querySelector('.confirm-error');

// Disable submit if passwords do not match
form.addEventListener('submit', e => {
    e.preventDefault();
    if (checkPasswordMatch() == true) {
        form.submit();
    };
})

function checkPasswordMatch() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setAttribute('style', 'border: 1px solid rgb(255, 0, 0); background-color: rgba(255, 0, 0, .07);');
        confirmError.innerText = 'Passwords do not match';
        return false;
    }
    else {
        confirmPassword.setAttribute('style', 'border: 1px solid rgb(60, 188, 0); background-color: rgba(60, 188, 0, .07);');
        return true;
    }
}

