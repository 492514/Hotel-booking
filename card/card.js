
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const cards = document.querySelectorAll(".room-card");





input.addEventListener("input", function () {
  const inputValue = input.value.trim();
  cards.forEach((card) => {
    const price = card.querySelector(".price").textContent;

     const priceNumber = price.replace(/[^0-9]/g, "");

     

    if (inputValue === "") {
      card.style.display = "block"; 
    } else if(priceNumber.startsWith(inputValue)){
      card.style.display = "block";
    }
    
    else {
      card.style.display = "none";
    }
  })
})
