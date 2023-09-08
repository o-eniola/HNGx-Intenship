// JavaScript to update real-time data
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

  // Update the elements with data-testid attributes
  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day: ${currentDay}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${currentUTC}`;
}

// Call the function to update current day and time when the page loads
updateCurrentDayAndTime();

// Optionally, you can set up a timer to update the time periodically
setInterval(updateCurrentDayAndTime, 1000); // Update every second
