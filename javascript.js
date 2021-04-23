
document.getElementById("lightOn").style.display = 'block';
document.getElementById("lightOff").style.display = 'none';

function onLight() {
    document.body.style.backgroundColor = "white";
    document.getElementById("lightOn").style.display = 'none';
    document.getElementById("lightOff").style.display = 'block';
}
function offLight() {
    document.body.style.backgroundColor = "#2B2B2B";
    document.getElementById("lightOn").style.display = 'block';
    document.getElementById("lightOff").style.display = 'none';
}

document.getElementById("lightOff").onclick = offLight;
document.getElementById("lightOn").onclick = onLight;
