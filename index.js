var clock = document.getElementById('clock');
function updateClock() {
    var now = new Date();
    var houres = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var currentTime = "".concat(houres, ":").concat(minutes, ":").concat(seconds);
    if (clock) {
        clock.textContent = currentTime;
    }
}
setInterval(updateClock, 1000);
updateClock();
