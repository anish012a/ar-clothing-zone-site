function setupAboutDropdown() {
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.closest(".dropdown");
      const isOpen = dropdown.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".dropdown")) {
      return;
    }

    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate form fields
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      showFormStatus("Please enter your name.", "error");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showFormStatus("Please enter a valid email address.", "error");
      return;
    }

    if (!message || message.length < 10) {
      showFormStatus("Please enter a message with at least 10 characters.", "error");
      return;
    }

    // If all validations pass
    form.reset();
    showFormStatus("Thanks for your message! We will contact you soon.", "success");
  });

  function showFormStatus(message, type) {
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = message;
      status.className = "form-status " + type;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupAboutDropdown();
  setupContactForm();
});
