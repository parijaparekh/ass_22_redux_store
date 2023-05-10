const Employee =  require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, office_number) {
    super(name, id, email, "Manager");
    this.office_number = office_number;   
  }

  getOfficeNumber(){
    console.log(`Office number is: ${this.office_number}`);
    return this.office_number;
  }
}

module.exports = Manager;
