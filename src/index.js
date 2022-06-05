const inquirer = require("inquirer");

const questions = [
  {
    name: "projectTitle",
    type: "input",
    message: "What is the title of the project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please enter a description for your project?",
  },
  {
    name: "installation",
    type: "input",
    message: "What steps should be followed to install the app?",
  },
  {
    name: "usage",
    type: "input",
    message: "Which instructions should be followed?",
  },
  {
    name: "license",
    type: "list",
    message: "What license has been applied to the project?",
    choices: [
      "Apache 2.0",
      "MIT",
      "BSD 2 Clause",
      "BSD 3 Clause",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "The Unlicense",
    ],
  },
  {
    name: "contributionConfirmation",
    type: "input",
    message: "Would you like contribute to the project?",
  },
  {
    name: "tests",
    type: "input",
    message: "What tests can be run on the app?",
  },
  {
    name: "gitHubUsername",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "emailAddress",
    type: "input",
    message: "What is your email address?",
  },
];

const init = async () => {
  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

init();
