 // Assignment 3 Part 1
// Step 1 
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie 
// in your array.

//var movies = ["Lord of the Rings", "Star Wars", "The Godfather","12 Monkeys","Return of the Jedi"];
 //   console.log(movies[1]);

// Step 2.	
//
// Declare an array called movies. Then, assign one of your favorite movies to each index in the array until 
// you have 5 total movies in your array. Then, use the console to display the first movie in your array.

 //   var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Back to the Future","Return of the Jedi"];
 //   console.log(movies[0]);

// Step 3.	
// Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. 
// You should now have 6 total movies stored in the array.

//  var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Back to the Future","Return of the Jedi"];
//  movies.splice(1, 0, "Invasion of the Body Snatchers");
//  console.log(movies.length);

// Step 4.	
// Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you 
// have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use 
// the console to display the contents of the array.

//    var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Back to the Future","Return of the Jedi"];
//    delete movies[0];
//    console.log(movies);
  
// Step 5.	
// Declare an array called movies. Then, assign one of your favorite movies to each index in the array until 
// you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie 
// within the console window.

 //   var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
 //   for(var i = 0; i < movies.length; i++){
 //       console.log(movies[i]);
 //   }


// Step 6
// Now, use a for-in loop to iterate through the array and display each movie within the console window.

 // var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
//  for(var i in movies){
//        console.log(movies[i]);
 //  }

// Step 7	
// Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//  var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
//  movies.sort();
//  for(var i in movies){
//        console.log(movies[i]);
//  }

// Step 8
// Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies 
// that you regret watching. Display both arrays within the console window so that it’s formatted to look like this 
// (note the spacing, you must include that too):

/*
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3

*/
/*
    var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
    var leastFavMovies = ["The Vanishing","Chicago","Star Wars Episode I: The Phantom Menace"];
    
    console.log("Movies I like:\n\n");
    for(var i in movies){
        console.log(movies[i]);
    }

    console.log("\nMovies I regret watching:\n\n");
    for(var i in leastFavMovies){
        console.log(leastFavMovies[i]);
    }
*/

// Step 9
// Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console 
//  window to display the list in reverse sorted order.

//    var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
//    var leastFavMovies = ["The Vanishing","Chicago","Star Wars Episode I: The Phantom Menace"];
    
//   movies = movies.concat(leastFavMovies).sort().reverse();
 //   for(var i in movies){
 //       console.log(movies[i]);
//   }
  
// Step 10
// Return just the last item in the array and display it within the console window.
 //   var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
//    var leastFavMovies = ["The Vanishing","Chicago","Star Wars Episode I: The Phantom Menace"];

//    movies = movies.concat(leastFavMovies).sort().reverse();

 //   console.log(movies[movies.length - 1]);

// Step 11	
// Remove the previous method and this time return just the first item in the array and display it within the 
// console window.
//    var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
//    var leastFavMovies = ["The Vanishing","Chicago","Star Wars Episode I: The Phantom Menace"];

//    movies = movies.concat(leastFavMovies).sort();
 //   console.log(movies[0]);


// Step 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those 
// indices, programmatically add movies that you do like. 

/*
    var movies = ["Lord of the Rings", "Star Wars", "The Godfather","Invasion of the Body Snatchers","Return of the Jedi","Back to the Future","12 Monkeys"];
    var leastFavMovies = ["The Vanishing","Chicago","Star Wars Episode I: The Phantom Menace"];
    var moviesToAdd = ["2001 A Space Odysey","No Time for sergeants","Apocalypse Now"];

    movies = movies.concat(leastFavMovies).sort();
    var changeIndices = [];
    var k = 0;

    for(var i in leastFavMovies){
        
        for(var j in movies){
            
            if(leastFavMovies[i] == movies[j]){     // get indices of least favorite movies     
                changeIndices[k++] = j;             // and put in array 
            }
        }
    }
    
    k = 0;
    for(var i in changeIndices){
    
        movies[changeIndices[i]] = moviesToAdd[k++];   // add new movies to the indices that had least favorite movies
    }
    movies.sort();
     for(var i in movies.sort()){
        console.log(movies[i]);   // show all the movies now without least favorite
    }   
*/    

// Step 13
// Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, 
// name, title, department, and whether or not the employee is a current employee of the company. Now, add both of 
// those associative arrays to a new array called employees. Then, programmatically display the name of the second 
// employee within a console window. 

/*
var employee1 = [];
employee1["employeeid"] = "101";
employee1["name"] = "James Bond";
employee1["title"] = "VP";
employee1["department"] = "Marketing";
employee1["currrentEmp"] = true;

var employee2 = [];
employee2["employeeid"] = "105";
employee2["name"] = "Joan Ark";
employee2["title"] = "Manager";
employee2["department"] = "HR";
employee2["currrentEmp"] = true;

*/
//var employees = [employee1,employee2];
//console.log(employees[1]["name"]);    
  

// Step 14
// Using the above code, modify the code slightly so that you’re using a loop to loop through the array and 
// printing out the names of both employees.

//for (var i in employees) { 
    
//    console.log(employees[i]["name"]); 
//}


// Step 15
// And to really tick you off, add a third employee and set his employment status to false. Then, programmatically 
// loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, 
// only the first two should appear in the console window.
//var employee3 = [];
//employee3["employeeid"] = "110";
//employee3["name"] = "Marilyn Monroe";
//employee3["title"] = "Actress";
//employee3["department"] = "Cinema";
//employee3["currrentEmp"] = false;

//var employeesNew = [employee1,employee2,employee3];
//for (var i in employeesNew) { 
    
//    if(employeesNew[i]["currrentEmp"]){
        
//        console.log(employeesNew[i]); 
//    }
//}


// Step 16
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
// The array should look something like this: 
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() 
// method and you’ll need to filter out the names by their primitive data type.

//var movies = [["Lord of the Rings", 1], ["The Godfather", 2], ["Star Wars", 3], ["Back to the Future", 4], ["Return of the Jedi", 5]];

 //var movieNames = movies.filter(function(item) { 
     
//        var  returnItem;
 //       for(var i = 0;i < item.length;i++){
            
 //           if (typeof item[i] == "string"){
 //               returnItem = item[i];
 //           }
 //       }
//     console.log(returnItem);
             
//});

// Practice with Functions (5 points)
// Step 1
 // Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement 
// that prints out the value of the parameter out into the console window. Now, call the function and pass in a string 
// as the parameter in the function call.

// var displayMessage = function(x) { 
//     console.log(x);
 //} 


//displayMessage("no such thing");

// Step 2	Create a named function named calculate that accepts two parameters. Within the function write a 
// statement that returns the modulus of the first and second parameters. Now, call the function and pass in 
// two numbers as parameters into the function call. Make sure to display the result within the console window.

//function calculate(param1, param2){
    
//    return param1%param2; 
//}

//console.log(calculate(22,8));
/* //Step 3	Create a string array called employees and populate the array with several employee names. 
  // Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this 
  // function, passing in the employees array into the function as a parameter. Make sure to display the result 
  // in the console window. Within the function, loop through the passed in array and display the result so that 
  // it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY

*/

//var employees  = ["ZAK","JESSICA","MARK","FRED","SALLY"];

// var showEmployee = function(empA) { 
     
 //    for(var i in employees){
 //        console.log(employees[i]);
 //    }  
// } 

//showEmployee(employees);

//     Part 2 ----------------

// Step 1
// Begin by prompting the user for their choice.
//var choice = prompt("Enter rock, paper or scissors");
//console.log(choice);



// Step 2
// Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. 
// Remember though, rather than 2 options, there will be 3 here.

 //   var computer;   
    // rock = 3.33333 or less
    // paper = 3.33334 - 6.66666
    // scissors = > 6.66667
 //   var randm = (Math.random() * 10); 


// Step 3
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, 
// paper, or scissors instead.

//    if(randm <= 3.33333){
//       computer = "rock";
//    }
//    else if(randm <= 6.66666){
//       computer = "paper";
//    }
//    else{
        
//       computer = "scissors"; 
//    }
//   console.log("random = " + randm + " computer = " + computer);


// Step 4
// Create a conditional that checks the user’s choice in relation to the computer’s choice. 
// Once a winner is defined, display a message within an alert box indicating who the winner is.
/*
     if(choice == "rock" && computer == "paper"){
         alert("computer chose paper, you lose");
     }
    else if(choice == "rock" && computer == "scissors"){   
         alert("computer chose scissors, you win");
    }
    else if(choice == "rock" && computer == "rock"){   
         alert("computer chose rock, tie game, try again");
    }
    else if(choice == "paper" && computer == "rock"){   
         alert("computer chose rock, you win");
    }
    else if(choice == "paper" && computer == "scissors"){   
         alert("computer chose scissors, you lose");
    }
    else if(choice == "paper" && computer == "paper"){   
         alert("computer chose paper, tie game, try again");
    }

    else if(choice == "scissors" && computer == "rock"){   
         alert("computer chose rock, you lose");
        gameOver = true;
    }
    else if(choice == "scissors" && computer == "paper"){   
         alert("computer chose paper, you win");
         gameOver = true;
    }
    else if(choice == "scissors" && computer == "scissors"){   
         alert("computer chose scissors, tie game try again");

    }   
*/


// Step 5
// What if the result ends in a tie? Figure out how to handle that as well.
/*
var gameOver = false;
function getComputerChoice(){
    
      var randm = (Math.random() * 10);

      if(randm <= 3.33333){
           computer = "rock";
      }
      else if(randm <= 6.66666){
           computer = "paper";
      }
      else{

           computer = "scissors"; 
      } 
    
      return computer;
}

do{
     if(choice == "rock" && computer == "paper"){
         alert("computer chose paper, you lose");
         gameOver = true;
     }
    else if(choice == "rock" && computer == "scissors"){   
         alert("computer chose scissors, you win");
         gameOver = true;
    }
    else if(choice == "rock" && computer == "rock"){   
         alert("computer chose rock, tie game, try again");
    }
    else if(choice == "paper" && computer == "rock"){   
         alert("computer chose rock, you win");
         gameOver = true;
    }
    else if(choice == "paper" && computer == "scissors"){   
         alert("computer chose scissors, you lose");
         gameOver = true;
    }
    else if(choice == "paper" && computer == "paper"){   
         alert("computer chose paper, tie game, try again");
    }

    else if(choice == "scissors" && computer == "rock"){   
         alert("computer chose rock, you lose");
        gameOver = true;
    }
    else if(choice == "scissors" && computer == "paper"){   
         alert("computer chose paper, you win");
         gameOver = true;
    }
    else if(choice == "scissors" && computer == "scissors"){   
         alert("computer chose scissors, tie game try again");

    }     
    
    if(!gameOver){
          var choice = prompt("Enter rock, paper or scissors");
          console.log(choice);   
        
          computer = getComputerChoice();
    }
    
}
while(!gameOver)
*/
// Step 6
// What if the user enters something other than rock, paper, or scissors into the prompt? 
// Figure out how to handle that as well.

/*
var computer;
var gameOver = false;
function getComputerChoice(){
    
      var randm = (Math.random() * 10);

      if(randm <= 3.33333){
           computer = "rock";
      }
      else if(randm <= 6.66666){
           computer = "paper";
      }
      else{

           computer = "scissors"; 
      } 
    
      return computer;
}

   function promptUser(){
       
       var badInput = true;
       var count = 0;
       var choice = prompt("Enter rock, paper or scissors").toLowerCase();
       do{
          if(choice != "rock" && choice != "paper" && choice != "scissors"){
              
              choice = prompt("You entered bad input. Please enter rock, paper or scissors");
          }
          else{
              badInput = false;   
          }
       }
       while(badInput && count++ < 3)
       
       if(count >= 3 && badInput){
            choice = -1;   
       }
       return choice;
   }
    
var choice = promptUser();
console.log(choice);
if(choice != -1){
    
    computer = getComputerChoice();
    do{
         if(choice == "rock" && computer == "paper"){
             alert("computer chose paper, you lose");
             gameOver = true;
         }
        else if(choice == "rock" && computer == "scissors"){   
             alert("computer chose scissors, you win");
             gameOver = true;
        }
        else if(choice == "rock" && computer == "rock"){   
             alert("computer chose rock, tie game, try again");
        }
        
        else if(choice == "paper" && computer == "rock"){   
             alert("computer chose rock, you win");
             gameOver = true;
        }
        else if(choice == "paper" && computer == "scissors"){   
             alert("computer chose scissors, you lose");
             gameOver = true;
        }
        else if(choice == "paper" && computer == "paper"){   
             alert("computer chose paper, tie game, try again");
        }

        else if(choice == "scissors" && computer == "rock"){   
             alert("computer chose rock, you lose");
            gameOver = true;
        }
        else if(choice == "scissors" && computer == "paper"){   
             alert("computer chose paper, you win");
             gameOver = true;
        }
        else if(choice == "scissors" && computer == "scissors"){   
             alert("computer chose scissors, tie game try again");
             
        }    

        if(!gameOver){
     
            choice = promptUser();
            if(choice != -1){
                
                computer = getComputerChoice();
            }
            else{
               gameOver = true; 
            }
        }

    }
    while(!gameOver)
}

*/

// The Basic Calculator 

// Step 1	Prompt the user for a number and store that in a variable.

//var num1 = prompt("Please enter a number");

// Step 2	Prompt the user for a second number and store that in a variable.

//var num2 = prompt("Please enter another number");

// Step 3	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide)
// and store that in a variable.
//var operation = prompt("Please enter an operation to perform - add, subtract, multiply or divide");

// Step 4	Create a new named function called calculate() that accepts 3 parameters.

//function calculate(num1, num2, op){
   
//}

// Step 5	Call the calculate function and pass in the 3 variables as parameters. 
// HINT: You will need to convert the 2 numbers from strings to numbers. 

//var answer = calculate(Number(num1),Number(num2),operation);
// Step 6	Within the calculate() function use a switch statement to evaluate the operation parameter 
// being passed in. Depending on what it is, perform that operation, and display the result within an 
// alert box.
/*
function calculate(num1, num2, op){
   
    var returnVal = null;
    
    switch(op){
            
        case "add":          returnVal = num1 + num2;
                             break;
        case "subtract":     returnVal = num1 - num2;
                             break;
        case "multiply":     returnVal = num1 * num2;
                             break;
        case "divide":       returnVal = num1/num2;
                             break;
        default:             break;
        
    }
    return returnVal;
    
}
//console.log(calculate(Number(num1),Number(num2),operation));

// Step 7	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, 
// or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the 
// application so that the application asks the user for the numbers and operation once more.


    var count = 0;
    var calculation; 
 do{

    var num1 = prompt("Please enter a number");
    var num2 = prompt("Please enter another number");
    var operation = prompt("Please enter an operation to perform - add, subtract, multiply or divide").toLowerCase();     
    
    if((calculation = calculate(Number(num1), Number(num2), operation)) == null){
        
        alert("You entered a bad input. Please try again.");
        
        count++;
    }
 }
while(count < 2 && calculation == null);
console.log(calculation);
*/

// Death by JavaScript 
// Step 1	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. 
// Assume punctuation and number symbols are not included in the passed-in string.

// Sample Data and Output
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'

//function alphabetize(myString){
    
 //  var modStr =  myString.trim().split('').sort().join('');
 //  console.log(modStr);
//}
//alphabetize("       webmaster  ");

// Step 2	Write a JavaScript function that accepts a string as a parameter and when called, converts the 
// first letter of each word of the string to upper case characters and return it.

//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'

//function firstLetterUpcase(myString){
    
 //  var modArray =  myString.split(" ");
 //  for(var i = 0; i < modArray.length; i++){
       
 //      modArray[i] = modArray[i].charAt(0).toUpperCase() + modArray[i].substring(1);
 //  }
 //  return modArray.join(" ");
   
//}
//console.log(firstLetterUpcase("the quick brown fox"));

// Step 3	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of 
// vowels within the string and returns that number.

//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5

//var inStr = "The quick brown fox has a big head";
//function countVowels(myString){
    
 // return myString.match(/[aeiou]/gi).length;
//}

//console.log( inStr + " -- has " + countVowels(inStr) + " vowels");

//Step 4 Write a JavaScript function that when called, generates a string id (specified length) of 8 
// random characters and returns those characters as a string. This is a great application to learn for
// making password generator-type applications.

//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

//function createPassword(passLength){
 //    var passwdStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 //    var passwd = "";
    
//     for(var i = 0;i < passLength; i++){

//       passwd += passwdStr.charAt( Math.round(Math.random() * 62) );    
//    }   
//    return passwd;
//}

//console.log(createPassword(8));

// Step 5	Write a JavaScript function that accepts a list of country names as input and when called, 
// returns the longest country name as the output.

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
/*
function longestName(countryNames){
    
    var maxLength = 0;
    var longestName;
    for(var i = 0; i < countryNames.length; i++){
        
        if(countryNames[i].length > maxLength){
            
            longestName = countryNames[i];
            maxLength = countryNames[i].length;
        } 
    }
    
    return longestName;
}

countryList = ["Albania", "Germany", "Democratic Republic of the Congo", "United States of America", "Australia", "Liechtenstein", "Spain"];
console.log(longestName(countryList));

*/