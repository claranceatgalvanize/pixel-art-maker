function started() {
    let arrayOfColors = ['#a44', '#f65', '#f87', '#ea5', '#fb5', '#fc8', '#ee5', '#ff6', '#ff9', '#7c5', '#8f6', '#bfa', '#35b', '#48f', '#9bf', '#65b', '#87f', '#baf', '#74a', '#c7f', '#daf', '#000', '#333', '#666', '#aaa', '#ddd', '#322', '#532', '#743', '#976', '#b98'];
    let color;
    let paintBox = document.getElementById('paint-box');
    let paintColors = document.getElementById('paint-colors');


    for (let i = 0; i < 1316; i++) {
        let newDiv = document.createElement("div");
        paintBox.appendChild(newDiv);
        newDiv.classList.add('pixels');
    }
    for (let i = 0; i < arrayOfColors.length; i++) {
        let newDiv = document.createElement("div");
        paintColors.appendChild(newDiv);
        newDiv.classList.add('paletteOfColors');
        newDiv.style.backgroundColor = arrayOfColors[i];


        if (i === arrayOfColors.length - 1) {
            let indicatorColor = document.createElement("div")
            indicatorColor.textContent = 'Current color';;
            indicatorColor.classList.add('thisColor');
            indicatorColor.style.color = 'white';
            paintColors.appendChild(indicatorColor);
        }
    }

    paintBox.addEventListener('mousedown', function(event) {

        let paint = event.target;
        paint.style.backgroundColor = color;

    })
    paintColors.addEventListener('mousedown', function(event) {
        color = event.target.style.backgroundColor;
        document.getElementsByClassName('thisColor')[0].style.backgroundColor = color;


    })
}
document.addEventListener("DOMContentLoaded", function(event) {
    started();
});