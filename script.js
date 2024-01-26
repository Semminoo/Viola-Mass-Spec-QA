const questions = [
    "Please classify main solid materials for SPE",
    "What does it mean SPME?",
    // ... Add all your questions here
];

const answers = [
    ["Non-polar systems like hydrocarbon chains (C8-C18)", "Polar systems like Si-based materials in the presence of 2OH, NH2, and CN groups or Si materials only", "Cation exchange in which the sorbent can be a strong acid (propylsulfuric acid) or a weak acid (carboxylic acid).", "Anion exchange: sorbent can be a strong base or a weak base. Examples are: primary/secondary amines, aminopropyl or diethylaminopropyl."],
    ["Solid phase micro extraction"],
    // ... Add all your answers here
];

const questionContainer = document.getElementById("question-container");

// Dynamically populate questions and answers
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<p><strong>Question ${i + 1}:</strong><br>${questions[i]}</p>`;
    const answerDiv = document.createElement("div");
    answerDiv.innerHTML = `<label>Answer ${i + 1}:</label><input type="text" id="answer${i + 1}" placeholder="Type your answer">`;
    questionContainer.appendChild(questionDiv);
    questionContainer.appendChild(answerDiv);
}

// Function to check answers
function checkAnswers() {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        const userAnswer = document.getElementById(`answer${i + 1}`).value.trim();
        const correctAnswer = answers[i].join(" ");

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
        }
    }

    alert(`Your score: ${score} out of ${answers.length}`);
}
