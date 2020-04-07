var inquirer = require("inquirer");
var generateHTML = require('./generateHTML');

inquirer
  .prompt([
    {
      type: "choice",                   //choices
      message: "Choose a manager",
      name: "username"
    },
    {
      type: "input",
      message: "Choose a team member",
      name: "password"
    },
    {
      type: "input",
      message: "Choose a team member",
      name: "confirm"
    }
  ])
  .then(function(response) {
      // 

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }

  });;

  const addMember = () => {
      // inq.prompt
        // do the inquirer prompt to add a member
        // last question is would you like to add another

    // .then
        // add this member to the list of teamMembers
            //organize these answers into an object
            /*
            let newMember = {
                name: response.name,
                email: response.email,
                id: response.id,
                role: response.role
            }
            */ 
            // push object to teamMembers
                // teamMembers.push(newMember)
        // if they want to add another
            // run addMember()
        // else
            // done adding members
            // invoke generate html
                //generateHTML(teamMembers)
    
  }
  
  const teamMembers = [];

  addMember();