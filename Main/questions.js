const quizQuestions = [
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack",
    subject: "Data Structure",
  },
  {
    question: "Which is a DDL command?",
    options: ["SELECT", "INSERT", "UPDATE", "CREATE"],
    answer: "CREATE",
    subject: "DBMS",
  },
  {
    question: "Which algorithm is based on divide and conquer?",
    options: ["Linear Search", "Quick Sort", "Bubble Sort", "Insertion Sort"],
    answer: "Quick Sort",
    subject: "Algorithms",
  },
  {
    question: "Who is considered the father of AI?",
    options: ["Alan Turing", "John McCarthy", "Andrew Ng", "Marvin Minsky"],
    answer: "John McCarthy",
    subject: "AI",
  },
  {
    question: "Main function of OS?",
    options: ["Compiling", "Web hosting", "Controlling hardware", "Editing"],
    answer: "Controlling hardware",
    subject: "Operating System",
  },
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const current = quizQuestions[currentIndex];
  document.getElementById("question").textContent = current.question;
  const optionsHtml = current.options
    .map(
      (opt) => `
        <label>
          <input type="radio" name="option" value="${opt}" /> ${opt}
        </label>`
    )
    .join("");
  document.getElementById("options").innerHTML = optionsHtml;
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }
  const answer = selected.value;
  const correct = quizQuestions[currentIndex].answer;
  const resultDiv = document.getElementById("result");
  if (answer === correct) {
    score++;
    resultDiv.textContent = "Correct!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `Wrong! Correct Answer: ${correct}`;
    resultDiv.style.color = "red";
  }
  currentIndex++;
  setTimeout(() => {
    if (currentIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      document.getElementById(
        "quiz-box"
      ).innerHTML = `<h3>You scored ${score} out of ${quizQuestions.length}</h3>`;
    }
  }, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();
});
