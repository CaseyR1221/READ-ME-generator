
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
        type:"checkbox",
        name: "license",
        message: "What licenses should be included in your project? Please check all that apply.",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GLP 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "confirm",
        name: "installation",
        message: "What commands should be ran to install the dependencies?",
        default: "npm i" 
    },
    {
        type: "confirm",
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
        name: "contributing",
        message: "What does the user need to know in order to contribute to th repo?" 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
