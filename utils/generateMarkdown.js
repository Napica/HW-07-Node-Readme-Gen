// function to generate markdown for README

// var test = function() {
//     return "this is a test"
// }

function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  
  <hr>
  
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
  
  <br/>

  ## Questions
  
  <hr>
  
  #### If you have any questions or concerns of this project please contact ${data.projectEmail}
  `;
}

module.exports = generateMarkdown;
