const display1 = document.getElementById('time1');
const btn1 = document.getElementById('startBtn1');
let interval1;

btn1.onclick = () => {
  clearInterval(interval1);
  let minutes = 60;
  display1.textContent = "60:00";
  btn1.disabled = true;
  interval1 = setInterval(() => {
    minutes--;
    let m = String(minutes).padStart(2, "0");
    display1.textContent = m + ":00";
    if (minutes === 30) alert("Залишилось менше половини часу!");
    if (minutes <= 0) {
      clearInterval(interval1);
      btn1.disabled = false;
    }
  }, 60000);
};

const display2 = document.getElementById('time2');
const btn2 = document.getElementById('startBtn2');
let rafId2, endTime2;

function update2(now) {
  const rem = Math.max(0, endTime2 - now);
  let txt = (rem / 1000).toFixed(3);
  if (rem <= 10000 && rem > 0) {
    const blink = Math.floor(rem / 250) % 2 === 0;
    if (blink) txt += " !!!";
  }
  display2.textContent = txt;
  if (rem === 0) {
    btn2.disabled = false;
    rafId2 = null;
    return;
  }
  rafId2 = requestAnimationFrame(update2);
}

btn2.onclick = () => {
  if (rafId2) return;
  btn2.disabled = true;
  endTime2 = performance.now() + 30000;
  rafId2 = requestAnimationFrame(update2);
};