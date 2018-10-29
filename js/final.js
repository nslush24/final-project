function toggleOne() {
    var ele = document.getElementById("toggleTextOne");
    var text = document.getElementById("displayTextOne");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Show/Hide Game One";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Show/Hide Game One";
    }
}
function toggleTwo() {
    var ele = document.getElementById("toggleTextTwo");
    var text = document.getElementById("displayTextTwo");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Show/Hide Game Two";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Show/Hide Game Two";
    }
}
function toggleThree() {
    var ele = document.getElementById("toggleTextThree");
    var text = document.getElementById("displayTextThree");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Show/Hide Game Three";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "Show/Hide Game Three";
    }
}
