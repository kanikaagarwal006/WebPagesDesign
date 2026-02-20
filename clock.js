// Digital_clock.js

function updateClock() {
    // Get current time
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be converted to 12
    
    // Format time with leading zeros
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Update the HTML elements
    document.getElementById('hour').textContent = formattedHours;
    document.getElementById('minute').textContent = formattedMinutes;
    document.getElementById('second').textContent = formattedSeconds;
    document.getElementById('ampm').textContent = ampm;
}

// Update clock immediately when page loads
updateClock();

// Update clock every second (1000 milliseconds)
setInterval(updateClock, 1000);