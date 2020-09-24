// function to generate markdown for README

// var test = function() {
//     return "this is a test"
// }

function generateMarkdown(data) {
  return `# ${data.title}
  
  `;
}

module.exports = { 
    generateMarkdown,
    // test: test 
    };
