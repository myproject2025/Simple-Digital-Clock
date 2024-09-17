const clock = document.getElementById('clock')


// function update the clock

function updateClock() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');


    const currentTime = `${hours}:${minutes}:${seconds}`


    if (clock) {
        clock.textContent = currentTime
    }
}



setInterval(updateClock, 1000)


updateClock()