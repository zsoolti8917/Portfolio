




document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scrollToBottom').onclick = function() {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      });
  };
});


   
