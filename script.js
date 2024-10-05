document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  const formData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phone,
    password: password,
  };

  console.log(formData); // Log form data as an object in the console
});
