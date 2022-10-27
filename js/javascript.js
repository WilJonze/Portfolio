/* Modal Button */

/*
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

/* Menu Transition */

function openNav() {
    document.getElementById("myNav").style.width = "100%" ;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Modal Button */

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
 
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);