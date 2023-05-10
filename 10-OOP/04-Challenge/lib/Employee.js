class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    if (role !== undefined){ 
      this.role = role;
    }
    else{
      this.role = "Employee"
    }
  }
  getName(){
    console.log(`Employee Name: ${this.name}`);
    return this.name;
  }

  getId(){
    console.log(`Id: ${this.id}`);
    return this.id;
  }

  getEmail(){
    console.log(`Email: ${this.email}`);
    return this.email;
  }

  getRole(){
    console.log(`Role is: ${this.role}`);
    return this.role;
  }
}

module.exports = Employee;
