const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Enter project description"
    }, 
    {
        type: "input",
        name: "installation",
        message: "Project installation (how/where to download your program)"
    },
    {
        type: "input",
        name: "description",
        message: "Project usage (input examples of how your project can be used)"
    },
    {
        type: "list",
        name: "license",
        message: "project license (choose from the list the license that this project is distributed under)",
        choices: ["Apache license 2.0", "Boost Software License 1.0", "Creative Commons license family", "Eclipse Public License 1.0", "ISC", "MIT"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Project contribution (state if you are open to contributions and acceptance criteria)"
    },
    {
        type: "input",
        name: "tests",
        message: "Project tests (include tests for your application and provide code examples and how to run them)"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your gitHub username',
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
