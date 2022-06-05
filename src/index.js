const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    name: "projectTitle",
    type: "input",
    message: "What is the title of the project?",
    validate(answers) {
      if (!answers) {
        return "Please enter a title.";
      }
      return true;
    },
  },
  {
    name: "description",
    type: "input",
    message: "Please enter a description for your project?",
    validate(answers) {
      if (!answers) {
        return "Please enter a description.";
      }
      return true;
    },
  },
  {
    //confirm installation details
    type: "confirm",
    message: "Would you like to add project installation details?",
    name: "confirmInstall",
  },
  {
    //confirm installation details
    // when: "confirmInstall",
    type: "input",
    message: "Enter installation details here:",
    name: "projectInstall",
    when(answers) {
      return answers.confirmInstall;
    },
  },
  {
    name: "usage",
    type: "input",
    message: "Which usage instructions should be followed?",
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

// add function to generate ReadMe

const generateReadMe = (answers) => {
  const renderInstallation = (confirmInstall, projectInstall) => {
    if (confirmInstall) {
      return `## Installation Steps
      ${projectInstall}`;
    } else {
      return "";
    }
  };
  return `${answers.projectTitle}
  ${renderInstallation(answers.confirmInstall, answers.projectInstall)}
  `;
};

const init = async () => {
  const answers = await inquirer.prompt(questions);

  const readMe = generateReadMe(answers);
  console.log("readme", readMe);
};

init();
