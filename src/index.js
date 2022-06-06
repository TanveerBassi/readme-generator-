const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");

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
    name: "installation",
    type: "input",
    message: "What steps should be followed to install the app?",
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
    name: "contributions",
    type: "input",
    message: "What process should be followed to contribute to the project?",
    when: (answer) => {
      return answer.contributionConfirmation;
    },
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
  return `# ${answers.projectTitle} ![badge](${encodeURI(
    `https://img.shields.io/badge/${answers.license}-license-green`
  )})
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
${answers.contributionConfirmation ? `- [Contributions](#contributions)` : ""}
${answers.testConfirmation ? `- [Tests](#tests)` : ""}
- [Questions](#questions)
## Description
${answers.description}
## Installation
\`\`\`
${answers.installation}
\`\`\`
## Usage
\`\`\`
${answers.usage}
\`\`\`
## License
${answers.license}
${
  answers.contributionConfirmation
    ? `## Contributions
${answers.contributions}`
    : ""
}
${
  answers.testConfirmation
    ? `## Tests
\`\`\`
${answers.tests}
\`\`\` `
    : ""
}
## Questions
Please contact me via email at ${
    answers.emailAddress
  } or via my GitHub repo at https://github.com/${answers.gitHubUsername}`;
};

const init = async () => {
  const answers = await inquirer.prompt(questions);

  const readMe = generateReadMe(answers);

  fs.writeFileSync("GENERATED_README.md", readMe);

  console.log(
    figlet.textSync("README generated!", {
      font: "bubble",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 40,
      whitespaceBreak: true,
    })
  );
};

init();
