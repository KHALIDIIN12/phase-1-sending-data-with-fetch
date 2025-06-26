
function submitData(name, email) {
  // 1️⃣ Build the data we want to send.
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())      
    .then((userObj) => {
    
      let output = document.getElementById("output");
      if (!output) {
        output = document.createElement("p");
        output.id = "output";
        document.body.appendChild(output);
      }
      output.textContent = `New user id: ${userObj.id}`;
    })
    .catch((error) => {
    
      let output = document.getElementById("output");
      if (!output) {
        output = document.createElement("p");
        output.id = "output";
        document.body.appendChild(output);
      }
      output.textContent = error.message;
    });
}
