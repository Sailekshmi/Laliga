var score = [0,1];

var team1={
    //Team1 details
    name: "Arsenal",
    runs: [],
    score:0
}

var team2={
    //Team2 details
    name: "Chelsea",
    runs: [],
    score:0
}
var team3={
    //Team3 details
    name: "Liverpool",
    runs: [],
    score:0
}

var team4={
    //Team4 details
    name: "Manchester",
    runs: [],
    score:0
}
var team5={
    //Team5 details
    name: "Tottenham",
    runs: [],
    score:0
}

var team6={
    //Team6 details
    name: "Watford",
    runs: [],
    score:0
}


var toss;


// window.addEventListener("load", () => {


// })

window.onload = () =>{
    selectToss(); // Deciding the strike
    // update the text of the button according to the strike
    updateButtonText1(); 
    updateButtonText2();
    updateButtonText3();
    updateNames(); // Updating the teams that are playing
    updateScore();
}

// function selectToss(){
//     toss = Math.round(Math.random())+1;
//     console.log(toss);
// }
// Function for deciding the toss
var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}

// Function to change the button text for 1st teams
var updateButtonText1 = () =>{
    var button = document.getElementById("strike-button1");
    console.log(button);
    var result = document.getElementById("result1");
    result.style.visibility ="";
    // check if game is over
    if(team1.runs.length == 5 && team2.runs.length == 5){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.runs.length ===5 ? 2 : team2.runs.length === 5 ? 1 : toss;
    }
    button.textContent = `${toss === 1 ? team1.name:team2.name} `;
};
//Function to change button text for 2nd teams
var updateButtonText2 = () =>{
    var button = document.getElementById("strike-button2");
    console.log(button);
    var result = document.getElementById("result2");
    result.style.visibility ="";
    // check if game is over
    if(team3.runs.length == 5 && team4.runs.length == 5){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team3.score === team4.score ? `Its a draw`: `${team3.score > team4.score? team3.name:team4.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team3.runs.length ===5 ? 2 : team4.runs.length === 5 ? 1 : toss;
    }
    button.textContent = `${toss === 1 ? team3.name:team4.name} `;
};

//Function to change button text for 3rd teams
var updateButtonText3 = () =>{
    var button = document.getElementById("strike-button3");
    console.log(button);
    var result = document.getElementById("result3");
    result.style.visibility ="";
    // check if game is over
    if(team5.runs.length == 5 && team6.runs.length == 5){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team5.score === team6.score ? `Its a draw`: `${team5.score > team6.score? team5.name:team6.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team5.runs.length === 5 ? 2 : team6.runs.length === 5 ? 1 : toss;
    }
    button.textContent = `${toss === 1 ? team5.name:team6.name} `;
};

// Function to update the teams name that are playing
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
    // Update Team - 3 name
    document.getElementById("team-3-name").textContent = team3.name;
    // Update Team - 4 name
    document.getElementById("team-4-name").textContent = team4.name;
    // Update Team - 5 name
    document.getElementById("team-5-name").textContent = team5.name;
    // Update Team - 6 name
    document.getElementById("team-6-name").textContent = team6.name;

}

var updateScore = () =>{
    // updating the score of teams
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    document.getElementById("team-3-score").textContent = team3.score;
    document.getElementById("team-4-score").textContent = team4.score;
    document.getElementById("team-5-score").textContent = team5.score;
    document.getElementById("team-6-score").textContent = team6.score;

    updateRuns1(); //update the scoreboard
    updateRuns2();
    updateRuns2();
}

// Strike button click for first teams
var handleStrikeButtonClick1 = () =>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);

 // check which team is on strike
 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs); // Update the team score
    
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs); // Update the team score
    
   }

   updateButtonText1();
   updateScore();
}
// Strike button click for second teams
var handleStrikeButtonClick2 = () =>{
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
   
    // check which team is on strike
    if (toss ===1)
      {
       team3.runs.push(runs);
      team3.score= calculateScore(team3.runs); // Update the team score
       
      } 
      else{
       team4.runs.push(runs);
       team4.score = calculateScore(team4.runs); // Update the team score
       
      }
   
      updateButtonText2();
      updateScore();
   }

// Strike button click for second teams
var handleStrikeButtonClick3 = () =>{
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
   
    // check which team is on strike
    if (toss ===1)
      {
       team5.runs.push(runs);
      team5.score= calculateScore(team5.runs); // Update the team score
       
      } 
      else{
       team6.runs.push(runs);
       team6.score = calculateScore(team6.runs); // Update the team score
       
      }
   
      updateButtonText3();
      updateScore();
   }



var calculateScore = (runs) =>{
    console.log("Calculate score method");
    
    return runs.map(num =>{
        
        return num == 0 ? 0: num;
    
    }).reduce((total,num) => total + num
    
    );
    
    };

var updateRuns1 = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
        // update runs on score board
    team1.runs.forEach((run,index)=>{
        if (run === 1){
            teamOneRunsElement[index].style.backgroundColor = "#00f00";
        }
         else{
            teamOneRunsElement[index].style.backgroundColor = "#f00";
        }
                
    });
    team2.runs.forEach((run,index)=>{
        if (run===1){
            teamTwoRunsElement[index].style.backgroundColor = "00#f00";
        }
        else{
            teamTwoRunsElement[index].style.backgroundColor = "#f00";
        }
            
    });
    
};    
        
var updateRuns2 = () =>{
    var teamThreeRunsElement = document.getElementById("team-3-round-runs").children;
    var teamFourRunsElement = document.getElementById("team-4-round-runs").children;
    // update runs on score board
    team3.runs.forEach((run,index)=>{
        if (run === 1){
            teamThreeRunsElement[index].style.backgroundColor = "#00f00";
        }
        else{
            teamThreeRunsElement[index].style.backgroundColor = "#f00";
        }
            
    });
    team4.runs.forEach((run,index)=>{
        if (run===1){
            teamFourRunsElement[index].style.backgroundColor = "00#f00";
        }
        else{
            teamFourRunsElement[index].style.backgroundColor = "#f00";
        }
        
    });
};

var updateRuns3 = () =>{
    var teamFiveRunsElement = document.getElementById("team-5-round-runs").children;
    var teamSixRunsElement = document.getElementById("team-6-round-runs").children;
    // update runs on score board
    team5.runs.forEach((run,index)=>{
        if (run === 1){
            teamFiveRunsElement[index].style.backgroundColor = "#00f00";
        }
        else{
            teamFiveRunsElement[index].style.backgroundColor = "#f00";
        }
            
    });
    team6.runs.forEach((run,index)=>{
        if (run === 1){
            teamSixRunsElement[index].style.backgroundColor = "00#f00";
        }
        else{
            teamSixRunsElement[index].style.backgroundColor = "#f00";
        }
        
    });
};