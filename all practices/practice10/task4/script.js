const image = document.getElementById("icon");
const infoBlock = document.querySelector('.info');
image.addEventListener("mouseenter", function (event) {
    infoBlock.style.cssText = "width: 300px; height: 400px";
}, false);

/*image.addEventListener("mouseleave", function (event) {
    infoBlock.style.cssText = "width: 0; height: 0";
}, false);*/
let flag = true;
image.onclick = function () {

    if (flag) {
        flag = false;
        image.classList.add('big-icon');
    }
    else if (!flag) {
        flag = true;
        image.classList.remove('big-icon');
    }
}