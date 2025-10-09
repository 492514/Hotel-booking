const login = document.querySelector("#login");
const hotel = document.querySelector("#hotel");

const register = document.querySelector("#registr");
const explorebtn = document.querySelector(".explore");

login.addEventListener("click", function(){
    window.location.assign("page.html");
});

register.addEventListener("click", function(){
    window.location.assign("card/card.html");
});

hotel.addEventListener('click', function(){
    window.location.assign("card/card.html");
});

explorebtn.addEventListener("click", function(){
     window.location.assign("card/card.html");
})

