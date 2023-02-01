function sendMail(contactForm) {
    emailjs.send("gmail", "resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }
    , "FyGwfY1mCh5BPn7-K")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}