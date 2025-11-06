
  
    document.addEventListener("DOMContentLoaded", function () {
    const sure = document.querySelector("#sure");
    const usern = document.querySelector("#name");
    const check = document.querySelector("#check");
    const out = document.querySelector("#out");
    const quantity = document.querySelector("#quantity");
    const good = document.querySelector("#good");

    const alert = document.querySelector("#alert");
     const detail = document.querySelector("#detail");
    const labels = document.querySelectorAll("label");
    const username = document.querySelector("#username");
    const checkin = document.querySelector("#Check-in");
    const checkout = document.querySelector("#Check-out");
    const guest = document.querySelector("#guest");
    const btn = document.querySelector(".btn");

  
    sure.style.display = "none";
    usern.style.display = "none";
    check.style.display = "none";
    out.style.display = "none";
    quantity.style.display = "none";
    good.style.display = "none";

   
    btn.addEventListener("click", function(e) {
      e.preventDefault();
    if( username.value.trim() === "" || checkin.value === "" || checkout.value === "" || guest.value === ""){
        alert.textContent = "*Please fill  all details*";
        alert.style.color = "red";
        setTimeout(() => {
            alert.textContent = "";
        }, 3000);
        return;
    }else{
       
        usern.textContent = `Name: ${username.value.trim()}`;
        check.textContent = `Check-in Date: ${checkin.value}`;
        out.textContent = `Check-out Date : ${checkout.value},*time = 11am*`;
        quantity.textContent = `Total Guests: ${guest.value}`;

     username.style.display = "none";
        checkin.style.display = "none";
        checkout.style.display = "none";
        guest.style.display = "none";
        btn.style.display = "none";
        alert.style.display = "none";
        detail.style.display = "none";
         labels.forEach(label => {
        label.style.display = "none"; 
    });
      

        
        sure.style.display = "block";
        usern.style.display = "block";
        check.style.display = "block";
        out.style.display = "block";
        quantity.style.display = "block";
        good.style.display = "block";
}
    });
});
