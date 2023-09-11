function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    const dateString = now.toISOString().split('T')[0];

    clockElement.textContent = `UTC Date: ${dateString} | Time: ${timeString}`;
}

// Update the clock every 100 milliseconds (adjust as needed)
setInterval(updateClock, 100);

// Update the clock immediately on page load
window.onload = updateClock;