const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector("#user-name-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (user_name && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ user_name, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);