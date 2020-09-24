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
        "Please enter the installation process for this current project.  *note: Please utilize ' n` for formatting your installation instructions. ",
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
    //
    {
      type: "input",
      message:
        "Please enter any details on individuals or entities that have contributed to this current project.",
      name: "projectContributors",
    },
    {
      type: "input",
      message:
        "Please enter how a contributor can go about testing this current project.",
      name: "projectTest",
    },
    {
      type: "checkbox",
      message: "Please choose from the list of applicable licenses below: ",
      choices: ["MIT", "Mozilla", "Apache", "Eclipse"],
      name: "projectLicense",
    },
    {
      type: "input",
      message: "Please enter your GitHub username for this current project.",
      name: "projectUsername",
    },
    {
      type: "input",
      message: "Please enter your contact email for this project",
      name: "projectEmail",
    },
  ])
  .then(function (data) {
    // console.log(data);
    fs.writeFile("genReadMe.md", JSON.stringify(data), function (err) {
      if (err) {
        return console.log(err);
      }
      //   console.log("Success!");
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
