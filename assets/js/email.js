function sendMail() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    // Form validation: check if all fields are filled
    if (name === "" || email === "" || subject === "" || message === "") {
        document.getElementById("msg").innerHTML = "Please fill out all fields!";
        document.getElementById("msg").style.color = "white";
        return; // Do not send email if validation fails
    }
    
    // Prepare parameters for emailjs
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send email with emailjs
    emailjs.send("service_z6bq74e", "template_72i0yol", parms)
        .then(function(response) {
            showModal(); // Show the custom modal when email is successfully sent
            clearForm(); // Clear the form after successful submission
        })
        .catch(function(error) {
            document.getElementById("msg").innerHTML = "Failed to send email. Try again!";
            document.getElementById("msg").style.color = "red";
        });
}

function showModal() {
    document.getElementById("customAlert").style.display = "block";
}

function closeModal() {
    document.getElementById("customAlert").style.display = "none";
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("msg").innerHTML = ""; // Clear any validation message
}
