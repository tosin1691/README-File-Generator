// function to generate markdown for README
const generateBadge = (license) => {
  const bagdes = {
    apachelicense20: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    boostsoftwarelicense10: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    eclipsepubliclicense10: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    mozillapubliclicense20: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}
  return bagdes[license]
}

const generateLicenseInfo = (license) => {
  const licenseUrl = {
    apachelicense20: "[Apache license 2.0](https://choosealicense.com/licenses/apache-2.0/)",
    boostsoftwarelicense10: "[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)",
    eclipsepubliclicense10: "[Eclipse Public License 1.0](https://www.eclipse.org/org/documents/epl-v10.php)",
    isc: "[ISC](https://opensource.org/license/isc-license-txt/)",
    mit: "[MIT](https://choosealicense.com/licenses/mit/)",
    mozillapubliclicense20: "[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)"
}
  return licenseUrl[license]
}


function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${generateBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${generateLicenseInfo(data.license)} License

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  - Email: Please contact me at ${data.email} for any questions
  - GitHub Username: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
