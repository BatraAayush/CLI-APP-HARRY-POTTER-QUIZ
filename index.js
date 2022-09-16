var readlineSync = require ('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.bold("what is your name? "), "\n");
console.log("\nwelcome",chalk.bold(userName),"to the ",chalk.bold("HARRY POTTER"),"quiz ! \n");

var score = 0;

// /*creating our function to take question and answer as an input 
// and then ask the question and display whether user enterd right 
// answer or not and to add score by one*/

function play(question, answer)
{
  var userAnswer = readlineSync.question(question + " option : ");


  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
  console.log(chalk.green("you are right !"));
  score = score + 1;
  }else{
  console.log(chalk.red("you are wrong"));
  }
  console.log("your score is : ", chalk.bold(score),"\n");
  
}
console.log(chalk.bold("give answer in : a, b, c, d"));
var questions = [ {
  ques : "Real name of HARRY POTTER :- \n a : tom cruise \n b : Denial Depp \n c : Kevin Spacey \n d : Daniel Radcliffe\n",
  ans : "d"
},{
  ques : "Real name of Ron Weasley :- \n a : Johnny Depp \n b : Lionardo DiCaprio \n c : Freddie Highmore \n d : Rupert Grint\n",
  ans : "d"
},{
  ques : "No of movies of Harry Potter :- \n a : 5 \n b : 7 \n c : 8 \n d : 9 \n",
  ans : "c"
},{
  ques : "Name of school of witchcraft and wizadry in harry potter :- \n a : Harvard \n b : stanford \n c : hogwarts \n d : oxford jr.\n",
  ans : "c"
},{
  ques : "Harry Potter And The Philosopher's Stone was released in year :- \n a : 2006 \n b : 2002 \n c : 2001 \n d : 1999\n",
  ans : "c",
},{
  ques : "Who was God Father o Harry Potter :- \n a : Albus Dumbeldore \n b : Sirius Black \n c : Voldemort \n d : Draco Malfoy\n",
  ans : "b"
},{
  ques : "Game played by them was :- \n a : Soccer \n b : fire Ball \n c : Quidditch \n d : Drags And Goal\n",
  ans : "c"
},{
  ques : "Harry Potter was in :- \n a : Gryffindor \n b : Slytherin \n c : Ravenclaw \n d : Hufflepuff\n",
  ans : "a"
},{
  ques : "Who was not evil in harry potter :- \n a : Lord Voldemort \n b : Sirius Black \n c : bellatrix lestrange \n d : Severus snape\n",
  ans : "b"
},{
  ques : "Harry Potter's owl was named as  :- \n a : Dobby \n b : Hedwig \n c : nagini  \n d : Scabber\n",
  ans : "b"
}
]

for(var index = 0; index < questions.length; index++){
  play(questions[index].ques, questions[index].ans);
 }

 var highScores = [ {
  name : "ajay ",
  score : 9
},{
  name : "rahul",
  score : 8
}
]
console.log(chalk.greenBright.bold.bgMagenta("yay ! you scored : ") + chalk.greenBright.bold.bgMagenta(score));

console.log(chalk.yellowBright.bold.underline("\nHIGH SCORES"));

var index = 0;
for (var index = 0; index < highScores.length; index++){
  console.log(chalk.yellow("name : ")+ chalk.blueBright.bold(highScores[index].name),"and", chalk.yellow("score : ")+ chalk.blueBright.bold(highScores[index].score));
}

var index = 0;
for (var index = 0; index < highScores.length; index++){
  if(score > highScores[index].score){
    console.log(chalk.green.bold("\nCONGRATULATIONS! you have beaten one of the high scores . please take a screenshot and send it to me."));
    break;
  }
}

while(true){
  var result = readlineSync.question("\nEnter"+chalk.bold(' Y ')+ "to exit : ");
  if (result.toUpperCase() === 'Y'){
    console.clear();
    break;
  }
}