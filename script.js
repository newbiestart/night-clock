function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secDeg = (seconds / 60) *360;
    const minDeg = ((minutes + seconds/60)/12)*360;
    const hourDeg = ((hours%12+minutes/60)*360);

    document.getElementById('second-hand').style.transform=`translateX(-50%) rotate(${secDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('digital-clock').innerText = now.toLocaleDateString(); 
}

const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dimmed');
});

setInterval(updateClock, 1000)
updateClock();