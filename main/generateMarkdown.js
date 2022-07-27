
var licenseBadge;
function renderLicenseBadge(license) {
  if (license) {
    if (license === "MIT") {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      
    } else if (license === "GNU") {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      
    } else if (license === "Apache") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      
    } else {
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
  } else {
    return "";
  }
}

var licenseLink;
function renderLicenseLink(license) {
  if (license) {
    if (license === "MIT") {
      licenseLink = "https://www.mit.edu/~amini/LICENSE.md";

    } else if (license === "GNU") {
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.txt";

    } else if (license === "Apache") {
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt";

    } else {
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
    }
  } else {
    return "";
  }
}

var licenseSection;
function renderLicenseSection(license) {
  if (license) {
    if (license === "MIT") {
      licenseSection = "This project is licensed under the MIT License.";

    } else if (license === "GNU") {
      licenseSection = "This project is licensed under the GNU License.";

    } else if (license === "Apache") {
      licenseSection = "This project is licensed under the Apache License.";

    } else {
      licenseSection = "This project is licensed under the BSD License.";
    }
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ${data.licenseBadge}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](##Contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contribution
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
