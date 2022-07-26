// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // check which license was passed
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // return license link
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // return license section
  }
  else {
    return "";
  }
}

// TODO: finish generateMarkdown fn

function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#How to Contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#Contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}
  
  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Contact
  GitHub: ${data.github} <br/>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
