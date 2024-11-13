document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario de forma tradicional

    const email = event.target.email.value;
    const responseMessage = document.getElementById("responseMessage");

    // Realiza la solicitud POST al endpoint de Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbyVJCFzknOnYyRYI8X8K_r-n9IaGwCBwD0SGgeo1B9ZayFSS-olUD5oB-dUYr15mQkk/exec", {
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
