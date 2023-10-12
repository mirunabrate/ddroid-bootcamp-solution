document.addEventListener("DOMContentLoaded", function () {
    const formDataDisplay = document.getElementById("formDataDisplay");

    // Retrieve form data from localStorage
    const formDataString = localStorage.getItem("formData");
    if (formDataString) {
        const formData = JSON.parse(formDataString);

        // Create an HTML string to display the data
        const html = `
            <h3>Submission Summary: </h3>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Last Name:</strong> ${formData.phone}</p>
            <p><strong>Email Address:</strong> ${formData.email}</p>
            <p><strong>Address Line 1:</strong> ${formData.address1}</p>
            <p><strong>Address Line 1:</strong> ${formData.address2}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>State:</strong> ${formData.state}</p>
            <p><strong>City:</strong> ${formData.city}</p>
        `;

        // Insert the HTML into the page
        formDataDisplay.innerHTML = html;
    } else {
        formDataDisplay.innerHTML = "<p>No form data found.</p>";
    }
});
