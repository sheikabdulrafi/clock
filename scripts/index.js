const minuteHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");
const secondsHand = document.querySelector(".seconds");

function setHands() {
  const date = new Date();
  const secondsAngle = date.getSeconds() * 6;
  const minutesAngle = date.getMinutes() * 6;
  const hoursAngle = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;
  secondsHand.style.setProperty("--rotation", secondsAngle);
  minuteHand.style.setProperty("--rotation", minutesAngle);
  hoursHand.style.setProperty("--rotation", hoursAngle);
}

setInterval(setHands, 1000);
