

const para = document.querySelector("#para");
const usernameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const paragraph = document.querySelector("#paragraph");
const btn = document.querySelector("#btn");

paragraph.classList.add("hide");

btn.addEventListener("click", function () {
  const usernameValue = usernameInput.value.trim().toLowerCase();
  const passwordValue = passwordInput.value;

   usernameInput.value = "";
  passwordInput.value = "";

  if (usernameValue === "" && passwordValue === "") {
    para.textContent = "* Please fill all details.";
  } else if (usernameValue === "shubham" && passwordValue === "12345") {

     usernameInput.value = "";
    passwordInput.value = "";

    paragraph.classList.remove("hide");
     usernameInput.classList.add("hide");
     passwordInput.classList.add("hide");
    para.classList.add("hide");
    btn.classList.add("hide");
  }else{
    para.textContent = "*Please fill correct details"

  }
 
});
  
