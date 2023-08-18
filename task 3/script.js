const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
    let valid = true;

    // Simple name validation (non-empty)
    if (nameInput.value.trim() === '') {
        alert('Name is required');
        valid = false;
    }

    // Email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Invalid email format');
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
});
