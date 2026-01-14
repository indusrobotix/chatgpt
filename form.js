function validateForm() {
  const email = document.forms["contactForm"]["email"].value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}
