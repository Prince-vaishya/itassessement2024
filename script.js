        document.getElementById('contactForm').addEventListener('submit', function(event) {
            // Prevent the form from submitting
            event.preventDefault();

            // Get the form elements
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const number = document.getElementById('number').value;
            const message = document.getElementById('message').value;

            // Check if any field is empty
            if (!name || !email || !number || !message) {
                alert('Please fill in all the fields.');
                return;
            }

            // If all fields are filled, show a success alert
            alert('Form submitted successfully!');

            // Optionally, you can submit the form here if needed
            // event.target.submit();
        });