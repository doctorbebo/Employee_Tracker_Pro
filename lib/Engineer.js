// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
module.exports = function(name, id, email, github)
{
    e = new Employee(name, id, email);
    this.getName = ()=> e.getName();
    this.getEmail = ()=> e.getEmail();
    this.getId = ()=> e.getId();
    
    this.github = github;

    this.getGithub= function()
    {
        return this.github;
    }
    this.getRole = function()
    {
        return "Engineer";
    }
}