document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        errorMessages.innerHTML = '';

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const address1 = document.getElementById("address1").value;
        const country = document.getElementById("country").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;

        const errors = [];

        if (!firstName) {
            errors.push("First Name is required.");
        }

        if (!lastName) {
            errors.push("Last Name is required.");
        }

        if (!email) {
            errors.push("Email Address is required.");
        }
        
        if (!address1) {
            errors.push("Address Line 1 is required.");
        }

        if (!country) {
            errors.push("Country is required.");
        }
        
        if (!state) {
            errors.push("State is required.");
        }
        
        if (!city) {
            errors.push("City is required.");
        }

        if (errors.length > 0) {
            // Display errors in a list
            // Met 1
            errorMessages.innerHTML = `
            <h3>Please fix the following errors to proceed:</h3>
            <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>`;

            // Met 2 
            // errorMessages.innerHTML = "<h3>Please fix the following errors to proceed:</h3><ul>";
            // errors.forEach(function (error) {
            //     errorMessages.innerHTML += "<li>" + error + "</li>";
            // });
            // errorMessages.innerHTML += "</ul>";
        } else {
            // Store form data in localStorage
            const formData = {
                firstName,
                lastName,
                email,
                address1,
                country,
                state,
                city,
            };

            localStorage.setItem("formData", JSON.stringify(formData));

            // Redirect to the next page
            window.location.href = "nextpage.html"; // Replace with the actual URL of your next page
        }
    });
});
 