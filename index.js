let clickCount = 0;
let countdownTimer;

function startCountdown() {
  clearTimeout(countdownTimer);
  countdownTimer = setTimeout(resetCounter, 5000);
}

function incrementCounter() {
  clickCount++;
  document.getElementById("clickCount").value = clickCount;
  startCountdown();
}

function resetCounter() {
  clickCount = 0;
  document.getElementById("clickCount").value = clickCount;
}

document.getElementById("clickBtn").addEventListener("click", incrementCounter);
