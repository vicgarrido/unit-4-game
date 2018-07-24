// variables
var totalScore = [];
var currentScore = 0;
var steven = [];
var amethyst = [];
var pearl = [];
var garnet = [];
var wins = 0;
var loss = 0;

// random number generator at the start, between 19-120
getNumber();

function getNumber() {
    totalScore = Math.floor(Math.random() * 120) + 19
    console.log(totalScore);
    document.querySelector("#magic-number").innerHTML = "The Magic Number: " + totalScore;
}

// starting score for 0
startScore();

function startScore() {
    document.querySelector("#score-number").innerHTML = "Score: " + currentScore;
}

// RNG for crystal 1, between 1-12
getStevenNumber();

function getStevenNumber() {
    steven = Math.floor(Math.random() * 12) + 1
    console.log(steven);
}

// RNG for crystal 2
getAmethystNumber();

function getAmethystNumber() {
    amethyst = Math.floor(Math.random() * 12) + 1
    console.log(amethyst);
}
// crystal 3
getPearlNumber();

function getPearlNumber() {
    pearl = Math.floor(Math.random() * 12) + 1
    console.log(pearl);
}

// crystal 4
getGarnetNumber();

function getGarnetNumber() {
    garnet = Math.floor(Math.random() * 12) + 1
    console.log(garnet);
}

//win or lose condition
function buttonPress (crystal) {
    currentScore += crystal;
    startScore();
    console.log("buttonPress", currentScore, totalScore)
    // if i win
    if (currentScore === totalScore) {
        wins++;
        alert("YOU WON");
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
    }
    // if i lose
    if (currentScore > totalScore) {
        loss++;
        alert ("YOU LOST");
        document.querySelector("#loss").innerHTML = "Losses: " + loss;
        reset();
    }
}

// reset function
var reset = function() {
    currentScore = 0;
    startScore();
    getNumber();
    getGarnetNumber();
    getPearlNumber();
    getStevenNumber();
    getAmethystNumber();
}
    
// Garnet button
$( "#garnet" ).click(function() {
    console.log("Garnet was pressed")
    console.log(currentScore);
    buttonPress(garnet);
    });

// Amethyst button
$( "#amethyst" ).click(function() {
    console.log("Amethyst was pressed")
    console.log(currentScore);
    buttonPress(amethyst);
    });

// Pearl button
$( "#pearl" ).click(function() {
    console.log("Pearl was pressed")
    console.log(currentScore);
    buttonPress(pearl);
    });    

// Rose Quartz button
$( "#rosequartz" ).click(function() {
    console.log("Rose Quartz was pressed")
    console.log(currentScore);
    buttonPress(steven);
    });