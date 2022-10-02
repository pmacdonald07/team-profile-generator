const generateCards = (employeeArray) => {
  const cardArray = [];
  const generateManager = (manager) => {
    return `<div class="card col-11 col-5-sm col-md-3 m-3 p-0 rounded">
            <div class="card-body bg-primary text-light rounded">
                <h4 class="card-title">${manager.getName()}</h4>
                <i class="fa-solid fa-mug-hot mr-2"></i>
                Manager
            </div>
            <ul class="list-group list-group-flush card-body">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}></a></li>
                <li class="list-group-item">Office Number: ${
                  manager.officeNumber
                }</li>
            </ul>
        </div>`;
  };

  const generateEngineer = (engineer) => {
    return `  <div class="card col-11 col-5-sm col-md-3 m-3 p-0 rounded">
                <div class="card-body bg-primary text-light rounded">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <i class="fa-solid fa-glasses"></i>
                    Engineer
                </div>
                <ul class="list-group list-group-flush card-body">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}></a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGitHub()}" target="_blank">GitHub Profile</a></li>
                </ul>
            </div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="card col-11 col-5-sm col-md-3 m-3 p-0 rounded">
            <div class="card-body bg-primary text-light rounded">
                <h4 class="card-title">${intern.getName()}</h4>
                <i class="fa-solid fa-user-graduate"></i>
                Intern
            </div>
            <ul class="list-group list-group-flush card-body">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}></a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`;
  };
  cardArray.push(
    employeeArray
      .filter((employeeObj) => employeeObj.getRole() === "Manager")
      .map((managerObj) => generateManager(managerObj))
      .join("")
  );
  cardArray.push(
    employeeArray
      .filter((employeeObj) => employeeObj.getRole() === "Engineer")
      .map((engineerObj) => generateEngineer(engineerObj))
      .join("")
  );
  cardArray.push(
    employeeArray
      .filter((employeeObj) => employeeObj.getRole() === "Intern")
      .map((internObj) => generateIntern(internObj))
      .join("")
  );
  return cardArray.join("");
};
const generateHTML = (employeeArray) => {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css"/>
            <title>Team Profile</title>
        </head>
        <body>
            <div class="jumbotron">
                <h1 class="display-4 text-center bg-danger bg-gradient text-light">My Team</h1>
            </div>
            <main class="container">
                <div class="row justify-content-center">
                ${generateCards(employeeArray)}
                </div>
        </main>
        <script src="https://kit.fontawesome.com/c95f931a54.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js"></script>
    </body>
    </html>`;
};

module.exports = generateHTML;
