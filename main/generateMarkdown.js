function renderLicenseBadge(license) {
  if (license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "GNU") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license) {
    if (license === "MIT") {
      return "https://www.mit.edu/~amini/LICENSE.md";
    } else if (license === "GNU") {
      return "https://www.gnu.org/licenses/gpl-3.0.txt";
    } else if (license === "Apache") {
      return "https://www.apache.org/licenses/LICENSE-2.0.txt";
    } else {
      return "https://opensource.org/licenses/BSD-3-Clause";
    }
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license) {
    if (license === "MIT") {
      return "This project is licensed under the MIT License.";
    } else if (license === "GNU") {
      return "This project is licensed under the GNU License.";
    } else if (license === "Apache") {
      return "This project is licensed under the Apache License.";
    } else {
      return "This project is licensed under the BSD License.";
    }
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  // console.log(data);
  return `
  # ${data.title}
  ## Description
  
  ${renderLicenseBadge(data.license)}
  
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#Contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}
  
  ${renderLicenseSection(data.license)}


  ## Contact
  GitHub: ${data.contact} <br/>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
