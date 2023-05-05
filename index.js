// // TODO: Include packages needed for this application

const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require('inquirer');
const fs = require(`fs`);


// // TODO: Create an array of questions for user input
// const questions = [];
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'instalattion instructions',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Usage Information',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'contribution guidelines',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'test instructions',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What license are you using?',
    name: 'license',
    choices: ["MIT", "Apache", "Boost"]
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHub username',
  },
  {
    type: 'email',
    message: 'What is your email?',
    name: 'Email',
  },
]
// }

// description, installation instructions, usage information, contribution guidelines, and test instructions

// // TODO: Create a function to write README file
let fileName = 'READme.md'; //creating a variable , the readme.md is being generated 

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data,  (err) => {
    err ? console.error(err) : console.log('Success!');
});
}



function init() {
  //propmpt user for questions in array above
inquirer.prompt(questions)
//.then function creating response
.then((response) => 
 
writeToFile(fileName, generateMarkdown (response)));
}  

init();
