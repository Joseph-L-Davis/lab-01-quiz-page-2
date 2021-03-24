// import functions and grab DOM elements
// import { isYes } from "./test/utils";

import { isYes } from './utils.js';

const button = document.getElementById('button');
const results = document.getElementById('results');


// initialize state




// set event listeners to update state and DOM
button.addEventListener('click', () => {

  // Initial alert, welcoming user
    alert('Welcome to the super mini Blazers Quiz!');
    //  Prompt user for name
    const name = prompt('What is your name?');
    // Ask if user wants to play
    const wantsToPlay = confirm(`Hello, ${name}! Would you like to take our quiz?`);

    if (!wantsToPlay) {
        alert('Smell ya later then!');
        return;
    }

    alert('Excellent, here we go!');

    let score = 0;

    const firstAnswer = prompt('Did Damian Lillard win Rookie of the Year?');
    const secondAnswer = prompt('Are the Trailblazers currently the only NBA team in the Pacific Northwest?');
    const thirdAnswer = prompt('Did Scottie Pippen win Most Valuable Player?');
    const fourthAnswer = prompt('Have the Trailblazers won multiple championships?');

    if (isYes(firstAnswer)) score++;
    if (isYes(secondAnswer)) score++;
    if (!isYes(thirdAnswer)) score++;
    if (!isYes(fourthAnswer)) score++;

    if (score >= 3) {
        const goodResultsString = `Nice job, ${name}! You got ${score} correct!`;
        results.classList.add('shake');
        results.textContent = goodResultsString;
        return;
    } else {

        const badResultsString = `Nice try ${name}, but you got ${score} correct.`;
        results.textContent = badResultsString;
    } 

    
});