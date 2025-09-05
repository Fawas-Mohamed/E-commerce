const registrationForm = document.getElementById('registrationForm');
const passwordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('reg-password-confirm');

registrationForm.addEventListener('submit', function(event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match.');
        event.preventDefault();
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
});
confirmPasswordInput.addEventListener('input', function() {
    confirmPasswordInput.setCustomValidity('');
});

function mainFunction(){
  location.replace("index.html")
}