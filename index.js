// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the name  of your project?",
        name: 'project'
    },
    {
        type: 'input',
        message: "Please provide a short description of your project.",
        name: 'description'
    },
    {
        type: 'list',
        message: 'Please choose your license type.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Name a command to install.",
        name: 'install'
    },
    {
        type: 'input',
        message: "Name a command to test.",
        name: 'test'
    },
    {
        type: 'input',
        message: "Advise user information for using.",
        name: 'using'
    },
    {
        type: 'input',
        message: "Advise user information for contributing.",
        name: 'contribution'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `#${data.project}`;
}
// TODO: Create a function to initialize app
function init() {
    const fileName = "README.md";
    inquirer.prompt(questions)
        .then (data => fs.writeFile(fileName, writeToFile(fileName, data), (err) => {
            if (err) console.log(error);
            else console.log("File created successfully.");
        }
        ))
};

// Function call to initialize app
init();
