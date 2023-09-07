let answers = document.querySelectorAll(".prateek");

answers.forEach((event1) => {
    const question = event1.querySelector(".prateek__question");

    question.addEventListener("click", () => {
        answers.forEach((otherAnswer) => {
            if (otherAnswer !== event1) {
                otherAnswer.classList.remove("active");
            }
        });

        if (event1.classList.contains("active")) {
            event1.classList.remove("active");
        } else {
            event1.classList.add("active");
        }
    });
});
