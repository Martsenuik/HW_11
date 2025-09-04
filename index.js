  const timerElement = document.querySelector(".timer");
  const startButton = document.querySelector(".start");

  let time = 3600; // 1 година (3600 секунд)
  let interval;
  let halfTimeShown = false; // щоб повідомлення було тільки один раз

  function updateTimer() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    timerElement.textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  function startTimer() {
    interval = setInterval(() => {
      time--;
      updateTimer();

      // Коли залишилось 30 хв
      if (time === 1800 && !halfTimeShown) {
        alert("Залишилось менше половини часу!");
        halfTimeShown = true;
      }

      // Коли час вийшов
      if (time <= 0) {
        clearInterval(interval);
        alert("Час вийшов!");
      }
    }, 1000);
  }

  startButton.addEventListener("click", startTimer);

  updateTimer();