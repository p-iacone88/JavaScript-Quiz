# JavaScript Coding Quiz

## Description
This project is a timed coding quiz created for coding boot camp students to evaluate their grasp of JavaScript fundamentals. The quiz comprises multiple-choice questions and facilitates the storage and comparison of high scores.

## Table of Contents
- [Motivation](#motivation)
- [Problem and Solution](#problem-and-solution)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Challenges and Future Enhancements](#challenges-and-future-enhancements)
- [What I Learned](#what-i-learned)
- [Project's Future](#projects-future)
- [Usage](#usage)
- [Credits](#credits)

## Motivation
The primary motivation behind building this project was to offer a practical tool for coding boot camp students to assess their comprehension of JavaScript fundamentals. It aimed to provide an engaging platform for self-evaluation and progress tracking.

## Problem and Solution
The project addresses the need for an interactive, timed quiz that enables students to test their understanding of JavaScript concepts in a structured manner. It offers a solution by presenting multiple-choice questions, initiating a timer, and allowing users to save and compare their scores.

  ### Problems Solved:
  - **Creation of Quiz Interface:** The script dynamically generates a quiz interface by displaying questions and multiple-choice options for users.
  - **Timer Functionality:** It implements a timer that starts when the quiz begins and subtracts time for incorrect answers.
  - **Score Calculation:** Tracks and updates the score based on the user's correct answers.
  - **High Score Storage:** Allows users to enter their initials to save their score, displaying it in a high scores list.
  - **Dynamic Interface Updates:** Presents the next question after answering and hides/display elements based on quiz progress.

  ### Solutions Implemented:
  - **Dynamic Question Display:** The `showQuestion()` function sets up the question text and answer options dynamically.
  - **Event Handling:** Utilizes event listeners for buttons (`startButton`, `nextButton`, `optionButton`) to trigger specific actions (start quiz, move to the next question, check the selected answer).
  - **Timer Management:** Incorporates a timer using `setInterval()` to update and display the remaining time, ending the quiz when the timer reaches 0.
  - **Quiz Completion Handling:** Manages the completion of the quiz by displaying the final score and providing the option to restart the quiz.

## Technologies Used
The project was developed using:
- HTML
- CSS
- JavaScript

## Features
The project includes:
- Interactive quiz interface
- Timer functionality
- Dynamic question presentation
- High score storage

## Challenges and Future Enhancements

  ### Challenges Faced:
  - Implementing timed functionality accurately.
  - Designing a dynamic and responsive user interface.

  ### Future Enhancements:
  - Implementing a feature to review incorrect answers.
  - Adding varying levels of difficulty for the quiz.
  - Incorporating visual cues for correct and incorrect answers.
  - Allowing users to select specific topics for the quiz.

## What I Learned
Throughout the development process, I gained insights into:
- Implementing timed functionality using JavaScript.
- Enhancing user experience through dynamic interfaces.
- Managing data storage for high scores.

## Project's Future
I would like this project to evolve by incorporating the planned enhancements mentioned above, making it a more comprehensive and user-friendly tool for evaluating JavaScript proficiency as my understanding of programming improves.

## Usage
To use the quiz application:
1. Click on the "Start" button to commence the quiz.
2. Answer the presented questions within the allocated time.
3. Incorrect answers will deduct time from the timer.
4. The game concludes when all questions are answered or when the timer reaches 0.
5. Enter initials to save your score and compare with others.

## Credits
This project was completed as part of the Penn LPS Full Stack Flex Coding Boot Camp, and tutoring was provided by Dru Sanchez.

## Deployed Site

https://p-iacone88.github.io/JavaScript-Quiz/

## Screenshots

<img width="1421" alt="Screenshot 2023-11-30 at 4 19 42 PM" src="https://github.com/p-iacone88/JavaScript-Quiz/assets/50248763/ea93325c-28e1-4a24-9f11-f43ecc8bcedf">

<img width="1429" alt="Screenshot 2023-11-30 at 4 19 54 PM" src="https://github.com/p-iacone88/JavaScript-Quiz/assets/50248763/17f12430-5fae-487f-9bc2-cb35caa97f4e">

<img width="1424" alt="Screenshot 2023-11-30 at 4 20 12 PM" src="https://github.com/p-iacone88/JavaScript-Quiz/assets/50248763/f3314cfb-6278-4e7f-8c63-bbc1b69de74d">

<img width="1429" alt="Screenshot 2023-11-30 at 4 21 08 PM" src="https://github.com/p-iacone88/JavaScript-Quiz/assets/50248763/e955e250-df19-442f-bc8c-22ef8f3a1e75">