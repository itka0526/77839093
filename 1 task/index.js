const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let initialSeconds = seconds;

        const [firstSpanElement] = document.getElementsByTagName("span");

        const countDown = (intervalId) => {
            let h = Math.floor(initialSeconds / 3600),
                m = Math.floor((initialSeconds % 3600) / 60),
                s = Math.floor(initialSeconds % 60);

            firstSpanElement.innerHTML = `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;

            if (initialSeconds <= 0) {
                clearInterval(intervalId);
            }

            initialSeconds--;
        };

        const myInterval = setInterval(() => countDown(myInterval), 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
    // Очистите input так, чтобы в значении
    const onlyNumbers = event.target.value.replace(/[^0-9]/g, "");
    // оставались только числа
    event.target.value = onlyNumbers;
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = "";
});
