function renderLicenseBadge(license) {
  const licenseBadge = [
    // require('inquirer'); removing thisbc its a list of badges not questions for user, but dont they pick?
   "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  ];
  if (license in licenseBadge) {
    return licenseBadge[license];
  } else {
    return "";
    //
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string   use switch???????????????   switch(license) / case "mit": lis link /break;
function renderLicenseLink(license){
let link = ""
switch(license) {
  case "MIT":
    return "[MIT](https://opensource.org/licenses/MIT)";
  case "Apache":
    return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
    return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
  default:
    link = ""
}
   return link;
}

const licenseSection = [];

function renderLicenseSection(license) {
if (!license) {
  return "";
} else {
  //return the lisences sectionk- whicj is basically linking the badge and link together
  const licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  const licenseLink = renderLicenseLink(license);
  return `## License\n${licenseBadge}\n\n${licenseLink}`;
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description
  #${data.description}\n
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)\n
      
  ## Installation
  #${data.installation}\n
  ## Usage
  #${data.usage}\n
   ## License
   ${renderLicenseSection(data.license)}
  ## Contributing
  #${data.contribution}\n
  ## Tests
  #${data.test}\n
  ## Email
  #${data.Email}\n
 `;
}

module.exports = generateMarkdown;
