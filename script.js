const board = document.getElementById("board");

const modal = document.getElementById("questionModal");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");

const showAnswerButton = document.getElementById("showAnswer");
const closeButton = document.getElementById("closeQuestion");

const questionImage = document.getElementById("questionImage");

let currentAnswer = "";

gameData.forEach(category => {

    const column = document.createElement("div");
    column.className = "column";

    const categoryName = document.createElement("div");
    categoryName.className = "category";
    categoryName.textContent = category.category;

    column.appendChild(categoryName);

    category.questions.forEach(question => {

        const box = document.createElement("div");
        box.className = "questionBox";

        box.textContent = `$${question.points}`;

        box.addEventListener("click", () => {

            modal.classList.remove("hidden");

            questionText.textContent = question.question;
            answerText.textContent = "";

            currentAnswer = question.answer;

            box.classList.add("used");
            
            if (question.image) {
                questionImage.src = question.image;
                questionImage.style.display = "block";
            } else {
                questionImage.style.display = "none";
            }

        });

        column.appendChild(box);

    });

    board.appendChild(column);

});

showAnswerButton.addEventListener("click", () => {

    answerText.textContent = currentAnswer;

});

closeButton.addEventListener("click", () => {

    modal.classList.add("hidden");

});