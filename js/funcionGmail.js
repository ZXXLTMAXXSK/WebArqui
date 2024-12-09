function sendEmail() {
    // Obtener valores del formulario
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validar que los campos no estén vacíos
    if (!name || !message) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    // Crear el enlace mailto
    const recipient = "jonathanpatricion@gmail.com"; // Cambia al correo de la empresa
    const subject = `Nuevo mensaje de ${name}`;
    const body = `Hola,\n\n${message}\n\nSaludos,\n${name}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirigir al cliente de correo
    window.location.href = mailtoLink;
  }