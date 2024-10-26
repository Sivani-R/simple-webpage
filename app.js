document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    successMessage.textContent = "Thank you! Your message has been sent successfully.";
    successMessage.style.display = "block";

    form.reset();
    
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  });
});
