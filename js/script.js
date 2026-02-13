const welcomeBtn = document.getElementById("welcomeBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

welcomeBtn.addEventListener("click", function() {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});