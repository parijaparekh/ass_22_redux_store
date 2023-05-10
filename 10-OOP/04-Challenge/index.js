const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager =  require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

class Team{
  constructor(){
    this.teamName = "";
    this.members = [];
    this.roles = {"Manager": Manager, "Intern": Intern, "Engineer": Engineer};
    this.rolesQuestion = {"Manager": "Office number", 
                          "Engineer": "Github URL",
                          "Intern": "School name",                      
                          };
    
    this.teamCreationQuestion = [
      {type:"input", 
        name:"team_name", 
        message:"Enter the name of the team you wish to record",
      },
      {type:"confirm", 
        name: "continue",
        message:"Do you wish to add team members ?",
      },
    ];//end of teamCreation Question[]
                                                
    this.generalQuestion = [
      {
        type:"list", 
        name:"role",
        message:"Select the role of the new team member",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message:"Enter the name of the new team member",
      }, 
      {
        type:"input", 
        name:"email",
        message:"Enter the email of the new team member",
      },
      {
        type:"input", 
        name:"Id",
        message:"Enter the Id of the new team member",   
      },
    ];//end of generalQuestion for a member[]
  };// end of constructor    

  //Async Await can also be used
  async addAMember(){
    //console.log(this.generalQuestion);
    const answers = await inquirer.prompt(this.generalQuestion);
    let member = new this.roles[answers.role]();
    let extrafield = this.rolesQuestion[member.role];
    //console.log(extrafield);
    member.name = answers.name;
    member.email = answers.email;
    member.id = answers.id;
    const answers_extrafield =  await inquirer.prompt([{
      type:"input",
      name: `${extrafield}`,
      message:`Enter information about the new team member's ${extrafield}`,  
    },])
    member[`${extrafield}`] = answers_extrafield[`${extrafield}`];
    this.members.push(member);
    console.log(`You have added ${this.members.length} members.`);
    return member;
  };// end of addAMember

  //async teamCreation
  async teamCreation(){
    console.log("Start"); 
    let createTeamAns = await inquirer.prompt(this.teamCreationQuestion[0]);
    this.teamName = createTeamAns.team_name;
    await this.memberAddition(); 
  };//end of team creation

  //async memberAddition
  async memberAddition(){
    let createTeamAns = await inquirer.prompt(this.teamCreationQuestion[1]);
    if (createTeamAns.continue){
      //console.log(createTeamAns.continue);
      let member =  await this.addAMember();
      await this.memberAddition();
    }
    else{
      console.log(`${this.teamName} has been created`);
    }
  };//end of member addition
}// end of class team


let team = new Team();
team.teamCreation();

//Ask the user if he wants to create the team. 
//If yes ask him the team name. 
//In a loop till continue is true
    //Ask him the designation of the team member
    //Name 
    //Id 
    //Email
    //Office Number, GitHub or School based on the designation. 
    //Add this member to the  employee array. 
    //Ask the user if he wishes to add more team members: 
        //if yes
            //continue = true 
        //else if no
            //continue = false
//For every element in employee array run the genrateHTML()
//display the HTML page. 
