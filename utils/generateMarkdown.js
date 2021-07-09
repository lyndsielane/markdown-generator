function renderTableOfContents(data) {
  return `
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  `;
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '' || license === 'none') {
    return '';
  }

  let badge, link;

  switch (license) {
    case 'MIT':
      badge = 'MIT-yellow';
      link = 'MIT';
      break;
    case 'APACHE 2.0':
      badge = 'Apache%202.0-blue';
      link = 'Apache-2.0';
      break;
    case 'GPL 3.0':
      badge = 'GPLv3-blue';
      link = 'gpl-3.0';
      break;
    case 'BSD 3':
      badge = 'BSD%203--Clause-blue';
      link = 'BSD-3-Clause';
      break;
    default:
      badge, link = '';
      break;
  }

    return `[![License](https://img.shields.io/badge/License-${badge}.svg)](https://opensource.org/licenses/${link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
## License    
This project is licensed under the ${license} license.
    `;
  // return markdown that creates the license section of your README
  // this will use the two functions above to create the badge and link
}

function renderInstallSection(command) {
  return `
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${command}
\`\`\`
  `;
}

function renderTestsSection(command) {
  return `
## Tests
To run tests, run the following command:
\`\`\`
${command}
\`\`\`
  `;  
}

function renderQuestionsSection(email, username) {
  return `
## Questions
If you have any questions about the repo, open an issue or contact me direction at ${email}. You can find more of my work at ${username}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderTableOfContents(data)}

${renderInstallSection(data.install)}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

${renderTestsSection(data.test)}

${renderQuestionsSection(data.email, data.username)}
  `;
}

module.exports = generateMarkdown;
