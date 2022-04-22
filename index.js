const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const questions = [
    { 
    type: "text",
    message: "What is your GitHub username?",
    name: "userName"
    },
    { 
    type: "text",
    message: "What is your email address?",
    name: "email"
    },
    { 
    type: "text",
    message: "What is your project's name?",
    name: "title"
    },
    { 
    type: "text",
    message: "Please write a short description of your project:",
    name: "description"
    },
    { 
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache", "GNU", "Mozilla", "Boost", "No License"]
    },
    { 
    type: "text",
    message: "What command should be run to install dependencies?",
    name: "install"
    }, 
    { 
    type: "text",
    message: "What command should be run to run tests?",
    name: "tests"
    },
    { 
    type: "text",
    message: "What does the user need to know about using the repo?",
    name: "use"
    },
    { 
    type: "text",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute"
    },
];
const askQuestions = () => {
inquirer.prompt(questions)
.then(function (data) {
    writeToFile(data)
    }
)}

// TODO: Create a function to write README file

const writeToFile = (data) => {
    fs.writeFile("README.md", generateMarkdown.generateMarkdown(data), ifwrite => (console.log('Success!')));
}

// TODO: Create a function to initialize app
function init() {
    askQuestions();
}

// // Function call to initialize app
init();
  