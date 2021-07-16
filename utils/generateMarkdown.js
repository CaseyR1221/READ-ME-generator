// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let badge = "";
  switch (license) {
    case "MIT":
      console.log("test");
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      return badge;
    case "APACHE 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      return badge;
    case "GPL 3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      return badge;
    case "BSD 3":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      return badge;
    default:
      return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let link = ""
  switch (license) {
    case "MIT":
      console.log("test2");
      link = "(https://opensource.org/licenses/MIT)"
      return link;
    case "APACHE 2.0":
      link = "(https://opensource.org/licenses/Apache-2.0)"
      return link;
    case "GPL 3.0":
      link = "(https://www.gnu.org/licenses/gpl-3.0)"
      return link;
    case "BSD 3":
      link = "(https://opensource.org/licenses/BSD-3-Clause)"
      return link;
    default:
      return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, github, repo) => {
 return ` 
 ## License
 ${license}
 \nPlease feel free to fork or collaborate on this project. Thank you for viewing! - Casey Rowlands, [${github}™](${repo}) 2019-Present. All Rights Reserved.
    
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  let content = `
  # ${data.title}
  ##### ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ## Table of Contents
  * [Repository Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Contribution](#contribute)
  
  # Repository Description
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.description}

  ## Installation
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.installation}

  ## Usage
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.usage}

  ${renderLicenseSection(data.license, data.github, data.repo)}

  ## Contributing
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.contribute}

  ## Tests
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${data.test}
  
  ## Questions
  ###### [Back to Table of Contents](#Table-of-Contents)
  All questions and concerns can be addressed to ${data.github} on GitHub, or sent by email to ${data.email}.
  \nThank you!`;

  return content;
}

module.exports = generateMarkdown;
