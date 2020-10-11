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

var toss;


// window.addEventListener("load", () => {


// })

window.onload = () =>{
    selectToss(); // Deciding the strike
    updateButtonText(); // update the text of the button according to the strike
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

// Function to change the button text
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    button.textContent = `${toss === 1 ? team1.name:team2.name} Playing`;
}

// Function to update the teams name that are playing
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    // updating the score of team1 and team2
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
}
