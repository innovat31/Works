function updateClock(cityId, timeZone) {
  const cityElement = document.getElementById(cityId);
  const timeElement = cityElement.querySelector(".time");
  const now = new Date().toLocaleTimeString("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  timeElement.textContent = now;
}

function updateAllClocks() {
  updateClock("new-york", "America/New_York");
  updateClock("london", "Europe/London");
  updateClock("tokyo", "Asia/Tokyo");
}

setInterval(updateAllClocks, 1000);
updateAllClocks();
