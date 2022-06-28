# 03 JavaScript: Password Generator

In this Module 3 Challenge, I was assinged to read a user story and an acceptance criteria. I had to make a random password generator that would generate a randomized password based off the users selection. This challenge taught me a lot about if statements and how to iterate through an array using a for loop to pull a string. This challenge also taught me how to use math.floor(math(random)) to randomize a selection. 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Work Completed

*Creates variables for lowercase, uppercase, numbers, and special characters

*Adds if statement within function determineLength in the script.js to find password length

*Adds if statement within function chooseChar in the script.js to find selection user has opted

*Creates a for loop with math.floor(math.random()) to randomize selections

*Adds functions to function writePassword() to ensure they run


## Deployed Site

The deployed site hosted by GitHub.

https://scottwatt.github.io/RandomPassword


## Screenshot

### Full page
![screenshot](/Images/rando.jpg)

### Random Password
![screenshot](/Images/Random.jpg)

