// EmailJS Contact Service Code

window.onload = function () {
    document.getElementById('code_institute').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_r17121989w', 'code_institute', this)
            .then(function () {
                Swal.fire({
                    icon: "success",
                    text: "Thank you for your message! We will get in touch with you soon."
                });
                document.getElementById("code_institute").reset();
            }, function (error) {
                Swal.fire({
                    icon: "error",
                    text: "Unfortunately there was an error sending your message. Please try again later."
                });
            });
    });
};