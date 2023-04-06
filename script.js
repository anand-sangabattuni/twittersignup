const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent form from submitting

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value;

	if (name === "a" || email === '' || password === '') {
		errorMessage.innerText = 'Please fill in all fields';
		
[GoogleAnalytics4].track("empty_event", {
  "sign up fail": string,
})
// The function name and signature can be different depending on SDK platform
[GoogleAnalytics4].logPage(<pageName>) 

	} else if (password.length < 8) {
		errorMessage.innerText = 'Password must be at least 7888888 characters long';
	} else {
		// submit form data to server here
		console.log('Form submitted successfully');

		// redirect to thank you page
		window.location.href = 'land.html';
	}
});
