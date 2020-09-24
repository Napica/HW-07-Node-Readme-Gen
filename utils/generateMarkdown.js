// function to generate markdown for README

function generateMarkdown(data) {
  let licenseText = "";
  if (data.projectLicense === "MIT") {
    licenseText =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.projectLicense === "Mozilla") {
    licenseText =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (data.projectLicense === "Apache") {
    licenseText =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.projectLicense === "Eclipse") {
    licenseText =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }

  let licenseNotice = "";
  if (data.projectLicense === "MIT") {
    licenseNotice = "This application is licensed under MIT";
  } else if (data.projectLicense === "Mozilla") {
    licenseNotice = "This application is licensed under Mozilla";
  } else if (data.projectLicense === "Apache") {
    licenseNotice = "This application is licensed under Apache";
  } else if (data.projectLicense === "Eclipse") {
    licenseNotice = "This application is licensed under Eclipese";
  }

  return `
  # ${data.projectTitle}
  
  <hr>

  ${licenseText}
  
  <br/>
  
  ${data.projectDescription}
  
  <br/>

  ## Table of Contents 

  ~[Installation](#installation)
  ~[Usage](#usage)
  ~[Contributing](#contributing)
  ~[Tests](#tests)
  ~[License](#license)
  ~[Questions](#questions)

  <br/>

  ## Installation 
  
  <hr>
  
  <br/>
  
  ${data.projectInstall}
  
  
  ## Usage 
  
  <hr>
  
  <br/>
  
  ${data.projectUsage}
     
  ## Contributing 
  
  <hr>
  
  <br/>  
  
  #### How to contribute
  
  ${data.projectHowToContribute}
  
  <br/>
  
  #### Contributors 
  
  ${data.projectContributors}
  
  <br/>
  
  ## Tests
  
  <hr>
  
  <br/>
  
  ${data.projectTest}
  
  ## License 
  
  <hr>
  
  ${licenseNotice}

  <br/>

  ## Questions
  
  <hr>
  
  #### If you have any questions or concerns of this project please contact ${data.projectEmail}
  `;
}

module.exports = generateMarkdown;
