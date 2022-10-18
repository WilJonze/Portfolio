
var modal = document.getElementById("myModal");

var button = document.getElementById("myButton");

var span= document.getElementsByClassName("close") [0];

button.onclick = function() {
    modal.style.display ="block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none;"
    }
}


function openNav() {
    document.getElementById("myNav").style.width = "100%" ;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}