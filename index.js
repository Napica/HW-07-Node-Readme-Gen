// array of questions for user
const questions = [];
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// inquirer prompts

inquirer.prompt ([
    {
        type: "input",
        message: "What would you like the project to be called?",
        name: "projectTitle"
    }
]).then(function(response){
    console.log(response);
})

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

// console.log(generateMarkdown.test())
