const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent form from submitting

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value;

	if (name === '' || email === '' || password === '') {
		errorMessage.innerText = 'Please fill in all fields';
	} else if (password.length < 6) {
		errorMessage.innerText = 'Password must be at least 6 characters long';
	} else {
		// submit form data to server here
		console.log('Form submitted successfully');

		// redirect to thank you page
		window.location.href = 'land.html';
	}
});
