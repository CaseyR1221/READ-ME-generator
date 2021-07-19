
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "repo",
        message: "Please enter the url of your Github repo."
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project."
    },
    {
        type:"input",
        name: "description",
        message: "Please enter a brief description of this project and its purpose."
    },
    {
        type:"list",
        name: "license",
        message: "What licenses should be included in your project?",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "What commands should be ran to install the dependencies?",
        default: "npm i" 
    },
    {
        type: "input",
        name: "test",
        message: "What command should be ran to run tests?",
        default: "npm test" 
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?" 
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know in order to contribute to th repo?" 
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(path.join(process.cwd(), fileName), data), (err) =>
        err ? console.log(err) : console.log("Success!");
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);

        let content = generateMarkdown(answers);
        console.log(content);
        writeToFile("README.md", content);
    })
}

// Function call to initialize app
init();
