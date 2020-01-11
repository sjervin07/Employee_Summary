const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //adding in wanted parameters of base constructor,then parameters for new one
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  setOfficeNum(newNumber) {
    this.officeNumber = newNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
