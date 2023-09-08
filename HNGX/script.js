// Update real-time data
function updateCurrentDayAndTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const currentDay = daysOfWeek[now.getUTCDay()];
  const currentUTC = now.toISOString().slice(11, 19);

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day: ${currentDay}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${currentUTC}`;
}

updateCurrentDayAndTime();
