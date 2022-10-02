const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generate-html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

const promptUser = () => {
  console.log(`

    =================
  
    Team Creator
  
    =================
    `);
  console.log(
    "Welcome to Team Creator! Let's start with your project manager:"
  );
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the project manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project manager's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is this manager's employee number?",
        validate: (idNumber) => {
          if (idNumber) {
            return true;
          } else {
            console.log("Please enter their employee number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this manager's email address?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "officeNumber",
        message: "What is this manager's office number?",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please their office number!");
            return false;
          }
        },
      },
    ])
    .then((answersData) => {
      const manager = new Manager(
        answersData.name,
        answersData.id,
        answersData.email,
        answersData.officeNumber
      );
      employeeArray.push(manager);
      promptNewEmployee();
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter this engineer's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is this engineer's employee number?",
        validate: (idNumber) => {
          if (idNumber) {
            return true;
          } else {
            console.log("Please enter their employee number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this employee's email address?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is this engineer's GitHub username?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their GitHub username!");
            return false;
          }
        },
      },
    ])
    .then((answersData) => {
      const engineer = new Engineer(
        answersData.name,
        answersData.id,
        answersData.email,
        answersData.github
      );
      employeeArray.push(engineer);
      promptNewEmployee();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this intern's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter this intern's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is this intern's employee number?",
        validate: (idNumber) => {
          if (idNumber) {
            return true;
          } else {
            console.log("Please enter their employee number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this intern's email address?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Where does this intern go to school?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their school!");
            return false;
          }
        },
      },
    ])
    .then((answersData) => {
      const intern = new Intern(
        answersData.name,
        answersData.id,
        answersData.email,
        answersData.school
      );
      employeeArray.push(intern);
      promptNewEmployee();
    });
};

const promptNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No, my team is complete"],
      },
    ])
    .then(function (choice) {
      switch (choice.addEmployee) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "No, my team is complete":
          let generatedHTML = generateHTML(employeeArray);
          writeFile(generatedHTML);
          console.log(
            "Your page has been created! See index.html in the dist folder."
          );
      }
    });
};

const writeFile = (generatedHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generatedHTML, (err) => {
      // if there's an error, reject the promise and send the error to the promise's '.catch()' method
      if (err) {
        reject(err);
        //return out of the function here to make sure the promise doesn't accidentally execute the resolve function as well
        return;
      }

      // if everything went well, resolve the promise and send the successful data to the '.then' method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const init = () => {
  promptUser();
};

init();
