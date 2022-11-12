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

const myNav = document.getElementById("myNav"); 
const openNavButton = document.querySelector("#menu");
const closeNavButton = document.querySelector('.closebtn');

function openNav() {
    myNav.classList.add("active");
}

function closeNav() {
    myNav.classList.remove("active");
}

openNavButton.addEventListener("click", openNav);
closeNavButton.addEventListener("click", closeNav);

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


/* Accordion Boxes */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
