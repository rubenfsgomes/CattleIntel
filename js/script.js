// When user gets close to end of Page popup social media
window.addEventListener("scroll", function() {
    // Check if user has reached the end of the page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-300) {
      // Show the pop-up
      var popup = document.getElementById("popup-container");
      popup.classList.add("show");
    }
    if ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight-370) {
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
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 813) {
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

const buttonMore = document.getElementById("more-button");
var state = 0;
buttonMore.addEventListener("click", function() {
  var more = document.getElementById("more-work");
  
  if (state === 0) {
    more.classList.add("show");
    
    buttonMore.classList.remove("fa-circle-chevron-down");
    buttonMore.classList.add("fa-circle-chevron-up");
    state = 1;
  } else {
    more.classList.remove("show");
    buttonMore.classList.remove("fa-circle-chevron-up");
    buttonMore.classList.add("fa-circle-chevron-down");
    state = 0;
  }
});

const buttonTeam = document.getElementById("show-team");
var state = 0;
buttonTeam.addEventListener("click", function() {
  var more = document.getElementById("team-img");
  
  if (state === 0) {
    more.classList.add("show");
    
    buttonTeam.classList.remove("fa-circle-chevron-down");
    buttonTeam.classList.add("fa-circle-chevron-up");
    state = 1;
  } else {
    more.classList.remove("show");
    buttonTeam.classList.remove("fa-circle-chevron-up");
    buttonTeam.classList.add("fa-circle-chevron-down");
    state = 0;
  }
});

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
  Email.send({
      Host : "sandbox.smtp.mailtrap.io",
      Username : "f6c46e5b213b37",
      Password : "3484b4544a75bb",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "Mail from website",
      Body : finalmessage
  }).then(
    message => alert(message)
  );
}


