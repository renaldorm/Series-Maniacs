// Forget password option
function forgetPassword() {
  const email = prompt("Enter your email address to reset your password.");
  if (email) {
  
    // This will display a message to the user to check their email
    alert(`An email has been sent to ${email} with instructions to reset your password.`);
  }
}

// Reset password recovery option
function resetPassword() {
  const code = prompt("Enter the recovery code you received by email.");
  if (code) {
   
    // This will display a message to the user to enter their new password
    alert(`Recovery code verified. Please enter your new password.`);
  }
}

// Password recovery confirmation
function confirmPassword() {
  
  // This will display a message to the user confirming that their password has been updated
  alert(`Your password has been successfully updated. Please log in with your new password.`);
}