// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseBadge}

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

  View the deployed version here: ${data.url}

  ${data.usageInfo}

  ## License

  ${data.licence}
  
  ## Contributing

  How to contribute to my project:
  ${data.contribution}

  ## Credits

  Additional authors on my project:
  ${data.credits}

  ## Tests

  ${data.testInstructions}

  ## Questions (Author Information)

  Author: ${data.authorName}
  GitHub: http://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
