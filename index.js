// grabbing modules through require()
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// questions formatted for the inquirer prompt() method
const questions = [
    { 
    type: "text",
    message: "What is your GitHub username?",
    name: "username"
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
// runs the inquirer prompt() with the questions array as an argument. it then passes the input data to writeTofile
const askQuestions = () => inquirer.prompt(questions).then((data) => writeToFile(data))
// takes data and passes it to 'generateMarkdown' which is imported from 'generateMarkdown.js' and returns a README.md based on the user input
const writeToFile = (data) => fs.writeFile("README_output.md", generateMarkdown.generateMarkdown(data), ifwrite => (console.log('Success!')));
// innit?
const init = () => askQuestions();
// INNNIT?!
init();
  