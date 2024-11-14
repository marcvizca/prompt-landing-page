document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario de forma tradicional

    const email = event.target.email.value;
    const responseMessage = document.getElementById("responseMessage");

    // Realiza la solicitud POST al endpoint de Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbzm4bj8YOZlhbJwr4r_j7T7PCIExBXZFgvhlv8LLneiuEry1fXxmVjMviIYFY9vdlOG9g/exec?email=" + encodeURIComponent(email), {
        method: "GET",
    })
    .then(response => response.text())
    .then(text => {
        console.log(text);
        if (text.includes("success")) {
            responseMessage.textContent = "¡Gracias por suscribirte!";
            responseMessage.style.color = "green";
            event.target.reset();  // Limpia el formulario
        } else {
            responseMessage.textContent = "Hubo un problema. Inténtalo de nuevo.";
            responseMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.log("ERROR AQUI:", error);
        responseMessage.textContent = "Error de red. Intenta más tarde.";
        responseMessage.style.color = "red";
        console.error("Error:", error);
    });
});
