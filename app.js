const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray =[];

const firstQuestions =[
{
    type: "list",
    name : "role",
    message : "What postion is the employee?",
    choices : ["Intern", "Manager", "Engineer"]
},
{
    type : "input",
    name :  "name",
    message : "What is the employee's name?"
},
{
    type : "input",
    name :  "id",
    message : "What is the employee's id?"
},
{
    type : "input",
    name :  "email",
    message : "What is the employee's email?"
}]
const internQuestions =
{
    type : "input",
    name : "school",
    message : "What school is the intern attending?"
}
const managerQuestions = 
{
    type : "input",
    name : "officeNumber",
    message : "What is the manager's office numbner?"
}
const engineerQuestions =
{
    type : "input",
    name : "gitHubUsername",
    message : "What is the engineer's GitHub username?"
}
function employeeQuestions()
{
    inquirer.prompt(firstQuestions).then(answers =>
    {
        switch (answers.role) {
            case "Intern":
                inquirer.prompt(internQuestions).then(internAnswers =>
                    {
                        let e = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
                        employeeArray.push(e)
                        console.log(employeeArray); 
                        anotherEmployee()      
                    })
                break;
            case "Manager":
                inquirer.prompt(managerQuestions).then(managerAnswers =>
                    {
                        let e = new  Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
                        employeeArray.push(e)
                        console.log(employeeArray);
                        anotherEmployee()        
                    })
                break;
            case "Engineer":
                inquirer.prompt(engineerQuestions).then(engineerAnswers =>
                    {
                        let e = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.gitHubUsername);
                        employeeArray.push(e)
                        console.log(employeeArray);
                        anotherEmployee()
                    })
                break;
        }
    });
}
function anotherEmployee()
{
    inquirer.prompt({type: "confirm", name : "another", message : "Do you want to add another Employee?"})
    .then(another => {
        if (another.another)
        {
            employeeQuestions();   
        }else
        {
            console.log(render(employeeArray));
        }
    })
}

employeeQuestions();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```