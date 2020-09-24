// array of questions for user
const questions = [];
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// inquirer prompts

inquirer
  .prompt([
    // Project Title
    {
      type: "input",
      message: "What would you like the project to be called?",
      name: "projectTitle",
    },
    // Project Description
    {
      type: "input",
      message: "Please enter a brief description of the current project.",
      name: "projectDescription",
    },
    // Project Installation Instructions
    {
      type: "input",
      message:
        "Please enter the installation process for this current project.  *note: Please utilize '/n' or '<br/>' for formatting your installation instructions. ",
      name: "projectInstall",
    },
    // Project Usage Information
    {
      type: "input",
      message:
        "Please enter any usage information that was used for this project.",
      name: "projectUsage",
    },
    // Project Guideline Information
    {
      type: "input",
      message:
        "Please enter the current guidelines on how to contribute to the current project.",
      name: "projectHowToContribute",
    },
    // Project Contributor Details 
    {
      type: "input",
      message:
        "Please enter any details on individuals or entities that have contributed to this current project.",
      name: "projectContributors",
    },
    // Project Contributor Test infomration
    {
      type: "input",
      message:
        "Please enter how a contributor can go about testing this current project.",
      name: "projectTest",
    },
    // Project License Details
    {
      type: "list",
      message: "Please choose from the list of applicable licenses below: ",
      choices: ["MIT", "Mozilla", "Apache", "Eclipse"],
      name: "projectLicense",
    },
    // Project GitHub Username
    {
      type: "input",
      message: "Please enter your GitHub username for this current project.",
      name: "projectUsername",
    },
    // Project Email Address
    {
      type: "input",
      message: "Please enter your contact email for this project",
      name: "projectEmail",
    },
  ])
  .then(function (data) {
    fs.writeFile("genReadMe.md", generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

// console.log(generateMarkdown.test())
