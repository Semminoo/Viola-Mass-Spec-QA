const questions = [
    "Please classify main solid materials for SPE",
    // Add more questions here if needed
];

const answers = [
    [
        "Non polar systems like hydrocarbon chains (C8-C18)",
        "polar systems like Si-based materials in the presence of 2OH, NH2 and CN groups or Si materials only",
        "Cation exchange in which the sorbent can be a strong acid (propylsulfuric acid) or a weak acid (carboxylic acid).",
        "Anion exchange: sorbent can be a strong base or a weak base. Examples are: primary/ secondary amines, aminopropyl or diethylaminopropyl."
    ],
    // Add more answers here if needed
];

const questionContainer = document.getElementById("question-container");

// Function to generate a masked answer with missing words
function generateMaskedAnswer(answer) {
    const words = answer.split(/\s+/);
    const maskedWords = words.map(word => (Math.random() < 0.5 ? "________" : word));
    return maskedWords.join(" ");
}

// Dynamically populate questions and answers
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<p><strong>Question ${i + 1}:</strong><br>${questions[i]}</p>`;
    const answerDiv = document.createElement("div");
    const maskedAnswer = generateMaskedAnswer(answers[i].join(" "));
    answerDiv.innerHTML = `<label>Answer ${i + 1}:</label><input type="text" id="answer${i + 1}" placeholder="${maskedAnswer}">`;
    questionContainer.appendChild(questionDiv);
    questionContainer.appendChild(answerDiv);
}

// Function to check answers
function checkAnswers() {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        const userAnswer = document.getElementById(`answer${i + 1}`).value.trim();
        const correctAnswer = answers[i].join(" ").toLowerCase();

        if (userAnswer.toLowerCase() === correctAnswer) {
            score++;
        }
    }

    alert(`Your score: ${score} out of ${answers.length}`);
}
