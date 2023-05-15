// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        title: "What is the title of your project?",
        name: "Title"
    },

    {
        description: "Please add a description of your project",
        name: "Description"
    },
    {
        tableOfContents: "Please create a table of contents",
        name: "Table of Contents"
    },
    {
        installationInstructions: "What are the installation instructions?",
        name: "Installation"
    },
    {
        usageInformation: "Please provide instructions on how to use",
        name: "Usage"
    },
    {
        contribution: "What are the contribution guidelines?",
        name: "Contribute"
    },
    {
        testInstructions: "What are the test instructions?", 
        name: "Tests"
    },
    {
        license: "What licence did you use?",
        name: "License",
        type: ["None", "MIT License", "Apache Licence 2.0", "GNU General Public Licence v3.0"]
    },
    {
        gitHub: "Please add your GitHub username",
        name:"GitHub"
    },
    {
        email: "Please add your email",
        name: "E-mail"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //return
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses)=> {
            const filename = `${responses.toLowerCase().split('').join('')}.md`;//creates file

            fs.writeFile(README.md, JSON.stringify(data, null, "\t"), (err)=>//grabs data from the top
            err ? console.log(err) : console.log("generating README!"))
        })
        .catch((error)=>{
            console.log(error)
        })
}

// Function call to initialize app
init();
