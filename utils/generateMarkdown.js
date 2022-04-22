// https://michaelcurrin.github.io/badge-generator/#/ this badge was created with thelp of Michael Currin's wonderful badge generator
// takes in a license as an argument and creates a badge with that license on it. Even "No License" will appear.
const renderLicenseBadge = (license) => `<a href="#license"><img src="https://img.shields.io/badge/License-${license}-2ea44f" alt="License - ${license}"></a>`;
// Creates text in the License section of there is a license selected.
const renderLicenseSection = (license) => license === "No License" ? " " : "Distributed under the " + license + " License. See \`\LICENSE.txt\`\ for more information.";
// https://github.com/othneildrew/Best-README-Template snippets of HTML for the markdown were taken from this README template. which is awesome!
// creates markdown and uses data passed from index.js
const generateMarkdown = (data) => {
  return (
`# ${data.title}
${renderLicenseBadge(data.license)}
<div align="center">
  <p align="center">
    <h3>${data.description}</h3>
    <br />
    <a href="https://github.com/${data.username}/${data.title}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${data.username}/${data.title}">View Site</a>
    ·
    <a href="https://github.com/${data.username}/${data.title}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${data.username}/${data.title}/issues">Request Feature</a>
  </p>
</div>

## License
${renderLicenseSection(data.license)}`
)}
// makes the 'generateMarkdown' available for export where ever it is required.
module.exports = {generateMarkdown}

