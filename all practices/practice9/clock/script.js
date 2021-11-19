function showTime() {

    let date = new Date();
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");


    if (date.getHours() < 10) {
        hours.textContent = '0' + date.getHours();
    } else {
        hours.textContent = date.getHours();
    }

    if (date.getMinutes() < 10) {
        minutes.textContent = '0' + date.getMinutes();
    } else {
        minutes.textContent = date.getMinutes();
    }

    if (date.getSeconds() < 10) {
        seconds.textContent = '0' + date.getSeconds();
    } else {
        seconds.textContent = date.getSeconds();
    }

    setTimeout(showTime, 1000);
}

showTime();