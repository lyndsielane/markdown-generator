// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //switch case to return the matching license batch based on the license name.
  switch(license)  {
    case licence = "MIT": 
      break;
    case license = "Apache 2.0":
      break;
    case license = "GPL 3.0":
      break;
    case license = "BSD 3":
      break;
    default: 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //switch case to return a license link based on the license name
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
  // return markdown that creates the license section of your README
  // this will use the two functions above to create the badge and link
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `
${renderLicenseSection(data.license)}

# ${data.project}

## UserName 
${data.username}
  `;

  return output;
}

module.exports = generateMarkdown;
