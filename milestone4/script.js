var form = document.getElementById("resume");
var displayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect ionput values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //   generate the resume dynamically
    var resumeHtml = "\n   <h2><strong>Editable Resume</strong><h2>\n   <h3>Personal Informationh</h3> \n   <p><b>Name : </b> <span contenteditable=\"true\"> ".concat(name, " </span></p>\n   <p><b>Email : </b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n   <p><b>Phone: </b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n   <h3>Education</h3>\n       <p contenteditable=\"true\">Education :  ").concat(education, "</p>\n   \n     <h3>Experience</h3>\n       <p contenteditable=\"true\">Experience : ").concat(experience, "</p>\n\n     <h3>Skills</h3>\n        <p contenteditable=\"true\">Skills: ").concat(skills, "</p>\n   ");
    // display generated resume 
    if (displayElement) {
        displayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The Resume Display Element is Missing.");
    }
});
