window.addEventListener("scroll", function() {
    // Check if user has reached the end of the page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-1) {
      // Show the pop-up
      var popup = document.getElementById("popup-container");
      popup.classList.add("show");
    }
    if ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight-300) {
        // Show the pop-up
        var popup = document.getElementById("popup-container");
        popup.classList.remove("show");
      }
  });
  
const button = document.getElementById("close");

button.addEventListener("click", function() {
    var popup = document.getElementById("popup-container");
    popup.remove();
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 