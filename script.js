// Single question and answer
const question = "Please classify main solid materials for SPE";
const originalAnswer = "The main solid materials for SPE = solid phase extraction are:\n\
• Non polar systems like hydrocarbon chains (C8-C18)\n\
• polar systems like Si-based materials in the presence of 2OH, NH2 and CN groups\n\
or Si materials only\n\
• Cation exchange in which the sorbent can be a strong acid (propylsulfuric acid) or\n\
a weak acid (carboxylic acid).\n\
• Anion exchange: sorbent can be a strong base or a weak base. Examples are:\n\
primary/ secondary amines, aminopropyl or diethylaminopropyl.";

// Function to generate a question with missing words
function generateQuestion() {
    const answerArray = originalAnswer.split(/\s+/); // Split the answer into an array of words
    const blanksCount = Math.floor(answerArray.length / 4); // Number of words to blank out (adjust as needed)

    // Randomly choose words to blank out
    for (let i = 0; i < blanksCount; i++) {
        const randomIndex = Math.floor(Math.random() * answerArray.length);
        answerArray[randomIndex] = '______'; // Replace the word with a blank
    }

    const modifiedAnswer = answerArray.join(' '); // Join the array back into a string
    return { question, answer: modifiedAnswer };
}

// Dynamically populate questions and answers
const { question: currentQuestion, answer: currentAnswer } = generateQuestion();
const questionContainer = document.getElementById("question-container");
questionContainer.innerHTML = `<p><strong>Question:</strong><br>${currentQuestion}</p>`;
questionContainer.innerHTML += `<label>Answer:</label><input type="text" id="user-answer" placeholder="Type your answer">`;

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    const originalAnswerArray = originalAnswer.split(/\s+/).map(word => word.toLowerCase());

    // Check if user's answer matches the original answer (ignoring blank spaces)
    const isCorrect = originalAnswerArray.every((word, index) => {
        return word === userAnswer.split(/\s+/)[index] || word === '______';
    });

    // Provide feedback
    alert(isCorrect ? 'Correct!' : 'Incorrect. Please try again.');
}

