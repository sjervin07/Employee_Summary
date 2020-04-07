// expect outlook of userAnswers which is array
/*
userAnswers = [
    {
        name: response.name,
        email: response.email,
        id: response.id,
        role: response.role
    },
    {
        name: response.name,
        email: response.email,
        id: response.id,
        role: response.role
    },
]

*/

const fs = require('fs');
const open = require('open');

const generateHTML = userAnswers => {
  let content = "";
  for (let teamMember of userAnswers) {
      if (teamMember.position === "manager") {
          teamMember.logo = "##" //change this to the necessary relative path.
      } 

      // ============================ fix below===================
    let memberDiv = `<div>
            <p>${teamMember.name}
            <h5>Favorite things</h5>
                <ul>
                    <li>${teamMember.fav1}</li>
                    <li>${teamMember.fav2}</li>
                </ul>
            </p>
            <img src='${teamMember.logo}'>
        </div>`;
    content += memberDiv;
  }
  //==============================fix above==========================

  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <nav>
            <!-- do navbar stuff here -->
        </nav>
    ${content}
        
    </body>
    </html>`;

      // ============================ fix below===================
    //now we want to write that file
    fs.writeFile(__dirname + "/output/team.html", html, function(err) {
        if (err) {
            throw err
        }
        console.log('success');
        open('thepath-name', )

    }  ); //fix this line to be like activity

  //==============================fix above==========================
};

module.exports = generateHTML;

//npm install open