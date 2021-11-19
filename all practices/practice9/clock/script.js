function showTime() {

    let date = new Date();
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    hours.textContent = date.getHours();
    minutes.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();

    setTimeout(showTime, 1000);
}

showTime();