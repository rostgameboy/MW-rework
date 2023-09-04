document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
};

function myFunction() {
    let bcolor = document.body.style.background;
    if (bcolor === "rgb(119, 154, 198)") {
        document.body.style.background = "rgb(34, 36, 38)";
    } else {
        document.body.style.background = "rgb(119, 154, 198)";
    }
}