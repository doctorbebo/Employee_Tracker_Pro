// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
module.exports = function(name, id, email, officeNumber)
{
    e = new Employee(name, id, email);
    this.getName = ()=> e.getName();
    this.getEmail = ()=> e.getEmail();
    this.getId = ()=> e.getId();

    this.officeNumber = officeNumber;

    this.getOfficeNumber = function()
    {
        return this.officeNumber;
    }
    this.getRole = function()
    {
        return "Manager";
    }
}