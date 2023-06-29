// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ===  "Apache License 2.0") {
    return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Boost") {
    return "[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "Eclipse Public License 2.0") {
    return "[![License: Eclipse](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
  } else if (license === "BSD 3-Clause") {
    return "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ===  "Apache License 2.0") {
    return "[here](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[here](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {
    return "[here](https://opensource.org/licenses/MIT)";
  } else if (license === "Boost") {
    return "[here](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[here](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "Eclipse Public License 2.0") {
    return "[here](https://opensource.org/licenses/EPL-2.0)";
  } else if (license === "BSD 3-Clause") {
    return "[here](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Read more about ${license} ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installationInstructions}

  ## Usage

  View the deployed version here: ${data.url}\n

  ${data.usageInfo}

  ## License

  ${data.license}\n
  ${renderLicenseSection(data.license)}
  
  ## Contributing

  How to contribute to my project:
  ${data.contribution}

  ## Credits

  Additional authors on my project:\n
  ${data.credits}

  ## Tests

  ${data.testInstructions}

  ## Questions (Author Information)

  Author: ${data.authorName}\n
  GitHub: http://github.com/${data.github}\n
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
