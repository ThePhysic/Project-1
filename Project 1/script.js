document.getElementById("contact-form").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      event.preventDefault();  // Prevent form submission if fields are empty
    }
  });
  