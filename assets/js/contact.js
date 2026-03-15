$(document).ready(function () {
    $("#form").on("submit", function (e) {
        e.preventDefault(); // stop default form submit

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let msg = $("#msg").val().trim();
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "") {
            alert("Please enter your name");
            return false;
        }
        if (email === "") {
            alert("Please enter your email");
            return false;
        }
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address");
            return false;
        }
        if (msg === "") {
            alert("Please write a message");
            return false;
        }

        alert("Form submitted successfully!");
        $("#form")[0].reset(); // clear form after success
    });
});