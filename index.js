// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        name: "usageInfo",
        message: "Please enter usage information for your project"
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
            "Eclipse Public License 2.0"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
