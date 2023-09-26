$(document).ready(function() {
    $(".scrollToBottom").click(function() {
      $("html, body").animate({
        scrollTop: $("#bottom").offset().top
      }, 1000);
    });
  });
  
const form = document.querySelector('.contact-form')
const userEmail = document.getElementById('email');
const submit = document.querySelector('.submit-button')
const userName = document.getElementById('name')
const emailError = document.querySelector('.email-error')



userEmail.addEventListener('input', (event)=>{
  if (userEmail.validity.valid) {
    emailError.textContent = ""; 
  } else {
    errorMessage();
  }
})




form.addEventListener('submit', (event) =>{
    event.preventDefault()
    if (!userEmail.validity.valid) {
    errorMessage()
    } else {
        Notiflix.Notify.success('Thank you for reaching out to us!')
        form.reset()
    }
}
   
)

function errorMessage(){
    if (userEmail.validity.valueMissing) {
        emailError.textContent ="You need to enter an email address.";
      } else if (userEmail.validity.typeMismatch) {
        emailError.textContent ="Entered value needs to be an email address.";
      } else if (userEmail.validity.tooShort) {
        emailError.textContent = `Email should be at least ${userEmail.minLength} characters; you entered ${userEmail.value.length}.`; ;
      }
    
}