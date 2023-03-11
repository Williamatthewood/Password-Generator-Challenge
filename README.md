# Password Generator Starter Code

# User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# Acceptance Criteria

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

# Description

A simple password generator app. The application makes use of the eventListener functionality in Javascript to add a function that prompts the user for specific password criteria and then generates a random password based on that criteria, ultimately, displaying it in the textbox on the webpage. I used a long series of if-else statements to determine all possible combinations the user could input, and then used conditional statements in a corresponding for-loop to ensure the password characters would alternate between characters of each criteria. While the functionality is all here, the user experience could be improved by stlizing an actual form for user input as opposed to window prompts, alerts, and confirmations. 

# Screenshots
<img width="1073" alt="Screenshot 2023-03-11 at 1 14 18 PM" src="https://user-images.githubusercontent.com/112597870/224507519-4f70be2a-5a3b-4753-8ae7-53c9c378eefe.png">

<img width="1430" alt="Screenshot 2023-03-11 at 1 14 03 PM" src="https://user-images.githubusercontent.com/112597870/224507521-cff116c0-4504-487b-9665-5b4a921c16d0.png">

<img width="1438" alt="Screenshot 2023-03-11 at 1 13 53 PM" src="https://user-images.githubusercontent.com/112597870/224507523-664d5e3d-8c9f-4879-b93d-ada4c035bc2d.png">


# Link to Deployed Application

# Documentation used beyond course material

parseInt function:

https://www.webdevelopersnotes.com/the-javascript-prompt-getting-user-input

.includes function:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

.join function:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join