  # Node.js README.md Generator
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  ## Description
  
  
  This is a node.js CLI tool that uses `inquirer` to dynamically generate a README.md from user input.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#Contact)
  
  ## Installation
  To install, first clone the repo and navigate to the directory where 'package.json' is located. In the terminal run `npm i` and then `node index.js` to start.
  
  ## Usage
  You will be asked a series of questions about the content for your README. The README that's generated will follow the same layout as this README.md. The README will be created in the same directory as 'index.js'. To write the README to a different path, follow these steps:
  1. open index.js
  2. go to line 66 (`.then((data) => writeFile('README.md', generateMarkdown(data)))`)
  3. Paste the path of the directory you want the README created in before 'README.md'. Example: `.then((data) => writeFile('/user/Documents/README.md', generateMarkdown(data)))`


  ## Contribution
  You can contribute at https://github.com/jroller33/README-Generator
  
  ## Tests
  There are currently no tests for this application.

  ## License
  This project is licensed under the MIT License.
  https://www.mit.edu/~amini/LICENSE.md

  ## Contact
  GitHub: https://github.com/jroller33 <br/>
  Email: jr@gmail.com
