# README Generator - Module 9 Challenge

## Description

The goal with this assignment is to use Node, Inquirer and fs to be able to dynamically and quickly generate a professional README.md file for use on any project. This application can be used to generate a README with all the necessary components for any project or application.  
  
This project not only provides a way to generate a README file from the user's command line, it also serves as great practice for using node.js and the inquirer and fs libraries. I learned a lot about all of these technologies, as well as using dynamic values within template literals to be able to easily generate stylized text.

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## User Story

AS A developer  
I WANT a README generator  
SO THAT I can quickly create a professional README for a new project  

## Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I am prompted for information about my application repository  
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
WHEN I enter my project title  
THEN this is displayed as the title of the README  
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions  
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
WHEN I choose a license for my application from a list of options  
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  
WHEN I enter my GitHub username  
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  
WHEN I enter my email address  
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions  
WHEN I click on the links in the Table of Contents  
THEN I am taken to the corresponding section of the README  

## Installation

In order to run this application, you will need to install node.js on your computer, and then use 'npm install' once you've opened the project files in your IDE to install inquirer v8.2.4.

## Usage

To use this application to render a professional README file, follow these steps below:  
  
- Make sure all necessary libraries are installed per the installation instructions above  
- Run the command 'node index.js' in your terminal  
- Answer the following questions  
- Select your license from the list when that question is populated  
- Submit your answers! You will see the answers logged in the terminal as an object once you've submitted them, and you should see "success!" if there were no errors thrown  
- If there are any answers you'd like to change, simply restart the process and it will overwrite your README file  
- View your newly generated README file, titled new-README.md  
- Edit or add any sections you may need, and rename the file if desired.

//include tutorial video and screenshots here

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Features

- Use of fs and inquirer libraries to dynamically generate a professional README  
- Use of 'input', 'confirm', and 'list' types for user questions using the inquirer module  
- Ability to add credits to additional authors if they exist  
- Implementation of corresponding license badges and links  
- Tutorial video and screenshots to further assist in usage
