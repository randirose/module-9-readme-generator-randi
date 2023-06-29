// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input to be used in README
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project"
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Please enter installation instructions for your project"
    },
    {
        type: "input",
        name: "url",
        message: "Please enter the live URL for your project"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Please enter additional usage information for your project"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines for your project"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Please enter test instructions for your project"
    },
    {
        type: "list",
        name: "license",
        message: "Please enter usage information for your project",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Boost",
            "Mozilla Public License 2.0",
            "Eclipse Public License 2.0",
            "BSD 3-Clause"
        ]
    },
    {
        type: "input",
        name: "authorName",
        message: "Please enter your name"
    },
    {
        type: "confirm",
        name: "additionalAuthors",
        message: "Did you have additional contributors to your project?"
    },
    {
        when: (answers)=> answers.additionalAuthors === true, // will only ask this question if user responded Y to previous confirm question
        type: "input",
        name: "credits",
        message: "Please enter additional authors on your project"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email"
    },
];

// this function is used to write README file
function writeToFile(answers) {
    let readMeText = generateMarkdown(answers);
    fs.writeFile("new-README.md", readMeText, (err)=>{
        err ? console.error(err) : console.log("success!");
    })

}

// this function initializes app and begins asking user questions; calls writeToFile function
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers);
        writeToFile(answers);
    })
}

// Function call to initialize app
init();
