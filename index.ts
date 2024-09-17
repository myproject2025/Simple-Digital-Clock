const clock = document.getElementById('clock')


function updateClock() {
    const now = new Date()
    const houres = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')



    const currentTime = `${houres}:${minutes}:${seconds}`


    if (clock) {
        clock.textContent = currentTime
    }
}

setInterval(updateClock, 1000)


updateClock()