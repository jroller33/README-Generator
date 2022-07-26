// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const markdown = require('./main/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
        },
        {
            type: 'input',                              //      ******  different type
            name: 'license',
            message: 'Select the license for your project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
