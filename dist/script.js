// Selecting form and output elements
var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var nameOutput = document.getElementById("name-output");
var emailOutput = document.getElementById("email-output");
var educationOutput = document.getElementById("education-output");
var experienceOutput = document.getElementById("experience-output");
var skillsOutput = document.getElementById("skills-output");

// Handling form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on submit
    // Get user input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;

    // Display the output section and hide the form
    resumeOutput.style.display = "block";
    form.style.display = "none";

    // Populate the resume output section
    nameOutput.innerText = name;
    emailOutput.innerText = email;
    educationOutput.innerText = education;
    experienceOutput.innerText = experience;
    skillsOutput.innerText = skills;
});

// Clear form fields
var clearButton = document.getElementById("clear-form");
clearButton.addEventListener("click", function () {
    form.reset();
});

// Save Changes functionality (optional)
document.getElementById("save-button").addEventListener("click", function() {
    var name = nameOutput.innerText;
    var email = emailOutput.innerText;
    var education = educationOutput.innerText;
    var experience = experienceOutput.innerText;
    var skills = skillsOutput.innerText;

    // Optionally, save to localStorage or any other storage method
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("education", education);
    localStorage.setItem("experience", experience);
    localStorage.setItem("skills", skills);

    alert("Changes saved successfully!");
});

// Real-time content editing and saving to localStorage
[nameOutput, emailOutput, educationOutput, experienceOutput, skillsOutput].forEach(function (field) {
    field.addEventListener("input", function () {
        // Save changes to localStorage as user types
        localStorage.setItem(field.id, field.innerText);
    });
});


// Save Changes functionality (optional)
document.getElementById("save-button").addEventListener("click", function() {
    var name = nameOutput.innerText;
    var email = emailOutput.innerText;
    var education = educationOutput.innerText;
    var experience = experienceOutput.innerText;
    var skills = skillsOutput.innerText;

    // Optionally, save to localStorage or any other storage method
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("education", education);
    localStorage.setItem("experience", experience);
    localStorage.setItem("skills", skills);

    alert("Changes saved successfully!");
});
