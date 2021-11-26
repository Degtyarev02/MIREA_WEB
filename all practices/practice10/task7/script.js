let star = document.querySelectorAll(".star");
let message = document.querySelector(".h3");
let count = 0;
let form = document.querySelector(".message");
let flag = false;


function change() {
    for (let i = 0; i < star.length; ++i) {

        star[i].addEventListener("mouseenter", function (event) {
            if (!flag) {
                for (let j = 0; j < i + 1; j++) {
                    star[j].src = "../img/staron.png";
                }
            }
        }, false);

        star[i].addEventListener("mouseleave", function (event) {
            if (!flag) {
                for (let j = 0; j < i + 1; j++) {
                    star[j].src = "../img/staroff.png";
                }
            }
        }, false);

        star[i].onclick = function () {
            if (!flag) {
                for (let k = 0; k < i + 1; ++k) {
                    count++;
                    star[k].src = "../img/staron.png";
                }
                flag = true;
            }
            form.classList.add("starSelected");
            if (count <= 2) {
                message.textContent = "Плохо!";
            } else if (count === 3) {
                message.textContent = "Приемлемо!";
            } else if (count === 4) {
                message.textContent = "Хорошечно!";
            } else if (count === 5) {
                message.textContent = "Это шедевр!";
            }
        }
    }
}

change();

