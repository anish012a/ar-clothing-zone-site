const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
};

ready(() => {
  const toggler = document.querySelector("[data-nav-toggle]");
  const menu = document.getElementById("mainNavbar");
  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector("[data-back-to-top]");

  if (toggler && menu) {
    toggler.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");
      toggler.setAttribute("aria-expanded", String(isOpen));
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menu.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      }
    });
  }

  const updateScrollControls = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", isScrolled);
    backToTop?.classList.toggle("is-visible", window.scrollY > 520);
  };

  window.addEventListener("scroll", updateScrollControls, { passive: true });
  updateScrollControls();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const stickyButton = document.querySelector(".sticky-whatsapp-btn");
  const contactSection = document.getElementById("contact");

  if (stickyButton) {
    const toggleStickyButton = () => {
      if (!contactSection) {
        stickyButton.classList.add("visible");
        return;
      }

      const rect = contactSection.getBoundingClientRect();
      stickyButton.classList.toggle("visible", rect.bottom < 0 || rect.top > window.innerHeight);
    };

    window.addEventListener("scroll", toggleStickyButton, { passive: true });
    toggleStickyButton();
  }

  const forms = document.querySelectorAll("form[data-contact-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = form.querySelector("input[name='name']");
      const emailInput = form.querySelector("input[name='email']");
      const messageInput = form.querySelector("textarea[name='message']");
      const status = form.querySelector(".form-status");
      const errors = form.querySelectorAll(".input-error");

      errors.forEach((error) => {
        error.textContent = "";
      });

      const name = nameInput?.value.trim() || "";
      const email = emailInput?.value.trim() || "";
      const message = messageInput?.value.trim() || "";
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      let isValid = true;

      if (!name) {
        nameInput?.closest(".form-group")?.querySelector(".input-error")?.replaceChildren("Name is required.");
        isValid = false;
      }

      if (!emailIsValid) {
        emailInput?.closest(".form-group")?.querySelector(".input-error")?.replaceChildren("Enter a valid email address.");
        isValid = false;
      }

      if (message.length < 10) {
        messageInput?.closest(".form-group")?.querySelector(".input-error")?.replaceChildren("Message must be at least 10 characters.");
        isValid = false;
      }

      if (!isValid) {
        status?.replaceChildren("Please fix the highlighted fields.");
        status?.classList.add("error");
        status?.classList.remove("success");
        return;
      }

      form.reset();
      status?.replaceChildren("Thanks for your message. We will contact you within 24 hours.");
      status?.classList.add("success");
      status?.classList.remove("error");
    });
  });
});
