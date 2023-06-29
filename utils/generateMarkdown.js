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

  ## Description

  ${data.description}

  ## Installation

  ${data.installationInstructions}

  ## Usage Information

  ${data.usageInfo}

  ## License

  ${data.licence}
  
  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testInstructions}

  ## Questions (Author Information)

  Author: ${data.authorName}
  GitHub: http://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
