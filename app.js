const login = document.querySelector("#login");
const hotel = document.querySelector("#hotel");

const register = document.querySelector("#registr");
const explorebtn = document.querySelector(".explore");

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

login.addEventListener("click", function(){
    window.location.assign("login.html");
});

register.addEventListener("click", function(){
    window.location.assign("card.html");
});

hotel.addEventListener('click', function(){
    window.location.assign("card.html");
});

explorebtn.addEventListener("click", function(){
     window.location.assign("card.html");
})

