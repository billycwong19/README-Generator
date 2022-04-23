// https://michaelcurrin.github.io/badge-generator/#/ this badge was created with thelp of Michael Currin's wonderful badge generator
// takes in a license as an argument and creates a badge with that license on it. Even "No License" will appear.
const renderLicenseBadge = (license) => license === "No License" ? `<img src="https://img.shields.io/badge/License-None-2ea44f" alt="License - None">` :`<a href="#license"><img src="https://img.shields.io/badge/License-${license}-2ea44f" alt="License - ${license}"></a>`;
// Creates text in the License section of there is a license selected.
const renderLicenseSection = (license) => license === "No License" ? "Not Applicable" : "Distributed under the " + license + " License. See \`LICENSE.txt\` for more information.";
// https://github.com/othneildrew/Best-README-Template snippets of HTML for the markdown were taken from this README template. which is awesome!
// creates markdown and uses data passed from index.js
const generateMarkdown = (data) => {
  return (
`<div id="top"></div>

# ${data.title}
${renderLicenseBadge(data.license)}
<div align="center">
  <p align="center">
    <h3>${data.title}</h3>
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

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#tests">Tests</a></li>
        <li><a href="#questions">Questions?</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

<p>${data.description}</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

1. Clone the repo
   \`\`\`sh
   git clone https://github.com/${data.username}/${data.title}.git
   \`\`\`
2. Install NPM packages
   \`\`\`sh
   ${data.install}
   \`\`\`

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

<p>${data.use}</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## License

${renderLicenseSection(data.license)}

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

<p>${data.contribute}</p>

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

### Tests

Run tests command:

<code>${data.tests}</code>

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

If you have any questions about this application please feel free to email me here: ${data.email}

Project Link: [https://github.com/${data.username}/${data.title}](https://github.com/${data.username}/${data.title})

<p align="right">(<a href="#top">back to top</a>)</p>
`
)}
// makes the 'generateMarkdown' available for export where ever it is required.
module.exports = {generateMarkdown}

