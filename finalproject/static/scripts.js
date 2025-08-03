console.log("scripts.js is loaded!");

let focusTime = 15*60;
let focusInterval;
let focusEndTime;

function startHyperfocus() {
    clearInterval(focusInterval);

    const now = Date.now();
    focusEndTime = now + focusTime * 1000;

    focusInterval = setInterval(() => {
        const remaining = Math.floor((focusEndTime - Date.now()) / 1000);

        if (remaining > 0) {
            displayTime("hyperfocus-timer", remaining);
        } else {
            clearInterval(focusInterval);
            displayTime("hyperfocus-timer", 0);
            alert("Time’s up!");
        }
    }, 250); 
}



function resetHyperfocus(){
    clearInterval(focusInterval);
    focusTime = 15 * 60;
    displayTime("hyperfocus-timer", focusTime);
}

function displayTime(elementId, timeInSeconds){
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    document.getElementById(elementId).textContent = `${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayTime("hyperfocus-timer", focusTime);
});

function addMiniTimer() {
    const minutes = parseInt(document.getElementById("mini-time").value);
    if (!minutes || minutes <= 0) return;

    const timerDiv = document.createElement("div");
    let time = minutes * 60;
    const timerId = `mini-${Date.now()}`;
    timerDiv.id = timerId;
    timerDiv.textContent = `${minutes}:00`;
    document.getElementById("mini-timer-list").appendChild(timerDiv);

    const interval = setInterval(() => {
        if (time > 0) {
            time--;
            const mins = Math.floor(time / 60).toString().padStart(2, '0');
            const secs = (time % 60).toString().padStart(2, '0');
            timerDiv.textContent = `${mins}:${secs}`;
        } else {
            clearInterval(interval);
            timerDiv.textContent = "Done!";
            alert(`Mini timer (${minutes} mins) done!`);
        }
    }, 1000);
}
