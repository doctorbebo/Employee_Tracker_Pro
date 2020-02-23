// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
module.exports = function(name, id, email, school)
{
    e = new Employee(name, id, email);
    this.getName = ()=> e.getName();
    this.getEmail = ()=> e.getEmail();
    this.getId = ()=> e.getId();
    
    this.school = school;

    this.getSchool= function()
    {
        return this.school;
    }
    this.getRole = function()
    {
        return "Intern";
    }
}
