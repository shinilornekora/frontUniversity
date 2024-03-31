function attachEventsListeners() {
    const buttons = [
        document.getElementById('daysBtn'),
        document.getElementById('hoursBtn'),
        document.getElementById('minutesBtn'),
        document.getElementById('secondsBtn'),
    ]

    for (btn of buttons) {
        btn.addEventListener('click', calculate);
    }
}

function calculate(event) {
    const unit = event.target.id

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    let totalSeconds = 0;
    
    if (unit === 'daysBtn') {
        totalSeconds = parseFloat(daysInput.value) * 24 * 60 * 60;
    } else if (unit === 'hoursBtn') {
        totalSeconds = parseFloat(hoursInput.value) * 60 * 60;
    } else if (unit === 'minutesBtn') {
        totalSeconds = parseFloat(minutesInput.value) * 60;
    } else if (unit === 'secondsBtn') {
        totalSeconds = parseFloat(secondsInput.value);
    }

    daysInput.value = Math.round(totalSeconds / (3600 * 24));
    hoursInput.value = Math.round(totalSeconds / 3600);
    minutesInput.value = Math.round(totalSeconds / 60);
    secondsInput.value = totalSeconds;
}