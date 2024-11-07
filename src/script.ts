// Selecting form and output elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
const nameOutput = document.getElementById("name-output") as HTMLElement;
const emailOutput = document.getElementById("email-output") as HTMLElement;
const educationOutput = document.getElementById("education-output") as HTMLElement;
const experienceOutput = document.getElementById("experience-output") as HTMLElement;
const skillsOutput = document.getElementById("skills-output") as HTMLElement;

// Handling form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload on submit

    // Get user input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

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
const clearButton = document.getElementById("clear-form") as HTMLButtonElement;
clearButton.addEventListener("click", () => {
    form.reset();
});

// Make content editable and updated in real-time
[nameOutput, emailOutput, educationOutput, experienceOutput, skillsOutput].forEach((field) => {
    field.addEventListener("input", () => {
        // You can save updated values here if needed, e.g., for local storage or other use
    });
});
