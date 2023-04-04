window.addEventListener("scroll", function() {
    // Check if user has reached the end of the page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      // Show the pop-up
      var popup = document.getElementById("popup-container");
      popup.classList.add("show");
    }
  });
  
const button = document.getElementById("close");

button.addEventListener("click", function() {
    var popup = document.getElementById("popup-container");
    popup.classList.remove("show");
});