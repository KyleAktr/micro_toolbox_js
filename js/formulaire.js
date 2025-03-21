    document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
  
      if (!email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:3000/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        });
  
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du message.");
        }
  
        alert("Message envoyé avec succès !");
        form.reset();
      } catch (error) {
        console.error("Erreur :", error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    });
  });
  