// Step 1
let userName = 'Dominick';

// Step 2
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Step 3
let userQuestion = "Will I have a good day?";

// Step 4
console.log(`${userName ? userName : "User"} asked: ${userQuestion}`);

// Step 5
let randomNumber = Math.floor(Math.random() * 8);

// Step 6
let eightBall = '';

// Step 7
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Step 8
console.log(`The Magic 8 Ball says: ${eightBall}`);


/*
How to Run the Magic 8-Ball Program

1. Open the terminal in Visual Studio Code.
2. Make sure you’re in the correct folder:
   - Go to the Explorer panel.
   - Right-click on your project folder and select "Copy Relative Path".
   - In the terminal, type `cd ` and paste the copied path to navigate to the folder, e.g.:
     cd "Java Script Projects"

3. Run the program:
   - Type the following command in the terminal:
     node magic8ball.js
*/

//i am adding more notes