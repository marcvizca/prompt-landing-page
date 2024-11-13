document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario de forma tradicional

    const email = event.target.email.value;
    const responseMessage = document.getElementById("responseMessage");

    // Realiza la solicitud POST al endpoint de Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbyIjW8QKzdQNJ6A8rWgTCU8dy0MCn7_0zFzTE7Vbzh15gpABkd6X1Oi-JMwFSmUOl48yw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            responseMessage.textContent = "¡Gracias por suscribirte!";
            responseMessage.style.color = "green";
            event.target.reset();  // Limpia el formulario
        } else {
            responseMessage.textContent = "Hubo un problema. Inténtalo de nuevo.";
            responseMessage.style.color = "red";
        }
    })
    .catch(error => {
        responseMessage.textContent = "Error de red. Intenta más tarde.";
        responseMessage.style.color = "red";
        console.error("Error:", error);
    });
});
