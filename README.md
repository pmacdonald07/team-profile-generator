# Team-Profile-Generator

## Description

This project takes user input from the command line about anyone working on a particular project. I takes different input depending on that employees role (manager, engineer, or intern). Once all of the data is collected, the application generates an html page with cards for each employee and their information.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Instillation

This application requires Inquirer, Jest, and Node.js. After cloning the GitHub repository, a user must enter "npm install" in the root directory of this application to make sure all dependencies are installed.

## Usage

Anyone with a team working on a project could use this application to neatly organize key information about everyone on their team.
The first thing a user should do is clone the GitHub repository for this application. After it is cloned, they should run "npm install".

![npm install](https://user-images.githubusercontent.com/108894754/193936647-e058548e-9ed1-42a0-b986-9e56fa2683f5.png)

Once these steps have been completed, a user just needs to type "node index.js" into the command line, and they will be presented with a series of prompts.

![running application](https://user-images.githubusercontent.com/108894754/193937043-9920a46a-a193-41c0-a4f3-f0ac893c5e10.png)

After that, the application will dynamically generate an index.html page in the "dist" folder, populated with their team's information. A finished html page will look like this when opened in a browser:

<img src="assets\imgs\team-profile screencap.png" width="1000"/>

A video demonstration of how to use this project and what it outputs can be seen at the link below:

https://drive.google.com/file/d/14a8gd0CbEbUEP4ud7IB1Vn1KKTCH_00e/view

## License

There are no licenses associated with this project.

## Contributing

Guidelines for contributing to this project:
There are no plans for adding contributors to this project at this time.

## Tests

There are tests for each employee role in this application. These roles are set up as JavaScript classes, beginning with a "super" Employee class, that each of the others extends from. The tests are designed to make sure each "employee" object has the properly formatted properties and methods. A user can run these tests by typing "npm run test" in the command line after installing this application.

## Questions

If you have any questions about the project, please reach out via the following:

[Github Profile](https://github.com/pmacdonald07)

GitHub repository: https://github.com/pmacdonald07/team-profile-generator.git

patrickmacdonald07@gmail.com
