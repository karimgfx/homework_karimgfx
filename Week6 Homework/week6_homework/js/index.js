//Declare & Assign Variables
var dieA = 1;
var dieB = 1;

var target = 7;
var numberOfRolls = 0;
var wins = 0;
var losses = 0;
//Handle Events
$('#roll-dice').on('click', function(){

    // Invoke the getRandomNumber function to get a random number
    dieA = getRandomNumber();
    dieB = getRandomNumber();

    // Use the number to set the class of the die which in you can see in the style.css file
    $('#dieA').attr('class', 'dice-' + dieA);
    $('#dieB').attr('class', 'dice-' + dieB);

    // Increment the total number of rolls by 1
    numberOfRolls++;

    // Invoke the checkIfRollIsWinner function to see if 
    var isWinner = checkIfRollIsWinner(dieA, dieB);
    if(isWinner)
    {
        wins++;
    } else {
        losses++;
    }
    console.log(wins, losses);
});

$('#reset').on('hover', function(){
    start(console.log(dieA, dieB));
  
   
});

//Declare Functions
function getRandomNumber()
{
    return Math.floor((Math.random() * 6) + 1);
}

function checkIfRollIsWinner(dieA, dieB)
{
    // See if the total of dieA and dieB equals the target
    if(dieA + dieB === target)
    {
        return true;
    } else {
        return false;
    }

}

function start()
{
   //Set dieA equal to 1
   dieA = 0

   //Set dieB equal to 1
   dieB = 0

   //Change the class on dieA to be "dice-1"
   $('#dieA').attr('class', 'dice-1');


   //Change the class on dieB to be "dice-1"
   $('#dieB').attr('class', 'dice-1');

   //Set wins equal to 0
   wins = 0

   //Set losses equal to 0
   losses = 0
}
function sumofRolls(dieA, dieB)
{

}
