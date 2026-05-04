// ============================================
// CONTACT FORM HANDLER
// ============================================
function setupContactForm() {
  const forms = document.querySelectorAll("[id$='-form-index'], .contact-form form");
  
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Get form inputs
      const nameInput = form.querySelector("input[name='name']");
      const emailInput = form.querySelector("input[name='email']");
      const messageInput = form.querySelector("textarea[name='message']");
      const statusDiv = form.querySelector(".form-status");
      
      // Validate
      const name = nameInput?.value.trim() || "";
      const email = emailInput?.value.trim() || "";
      const message = messageInput?.value.trim() || "";
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      // Reset errors
      form.querySelectorAll(".input-error").forEach(el => el.textContent = "");
      
      let isValid = true;
      
      if (!name) {
        if (nameInput?.parentElement.querySelector(".input-error")) {
          nameInput.parentElement.querySelector(".input-error").textContent = "Name is required";
        }
        isValid = false;
      }
      
      if (!email || !emailRegex.test(email)) {
        if (emailInput?.parentElement.querySelector(".input-error")) {
          emailInput.parentElement.querySelector(".input-error").textContent = "Valid email is required";
        }
        isValid = false;
      }
      
      if (!message || message.length < 10) {
        if (messageInput?.parentElement.querySelector(".input-error")) {
          messageInput.parentElement.querySelector(".input-error").textContent = "Message must be at least 10 characters";
        }
        isValid = false;
      }
      
      if (!isValid) return;
      
      // Show success
      form.reset();
      if (statusDiv) {
        statusDiv.textContent = "✓ Thanks for your message! We'll contact you within 24 hours.";
        statusDiv.className = "form-status success";
        
        // Clear message after 5 seconds
        setTimeout(() => {
          statusDiv.textContent = "";
          statusDiv.className = "form-status";
        }, 5000);
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe contact cards and forms
  document.querySelectorAll(".premium-card, .contact-form").forEach((el) => {
    el.classList.add("fade-in-element");
    observer.observe(el);
  });
}

// ============================================
// FLOATING LABEL ANIMATIONS
// ============================================
function setupFloatingLabels() {
  const floatingGroups = document.querySelectorAll(".floating-label-group");
  
  floatingGroups.forEach((group) => {
    const input = group.querySelector(".form-input");
    const label = group.querySelector(".floating-label");
    
    if (!input || !label) return;
    
    // Check initial state
    const checkLabel = () => {
      if (input.value.trim()) {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    };
    
    // On focus
    input.addEventListener("focus", () => {
      label.classList.add("active");
    });
    
    // On blur
    input.addEventListener("blur", () => {
      checkLabel();
    });
    
    // On input change
    input.addEventListener("input", () => {
      checkLabel();
    });
    
    // Check on load
    checkLabel();
  });
}

// ============================================
// STICKY WHATSAPP BUTTON VISIBILITY
// ============================================
function setupStickyWhatsappButton() {
  const stickyBtn = document.querySelector(".sticky-whatsapp-btn");
  if (!stickyBtn) return;
  
  const contactSection = document.querySelector("#contact");
  
  const handleScroll = () => {
    if (!contactSection) {
      stickyBtn.classList.add("visible");
      return;
    }
    
    const rect = contactSection.getBoundingClientRect();
    // Show sticky button when contact section is not in view
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      stickyBtn.classList.add("visible");
    } else {
      stickyBtn.classList.remove("visible");
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
function setupButtonRipples() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");
      
      // Remove existing ripples
      this.querySelectorAll(".ripple").forEach((r) => r.remove());
      this.appendChild(ripple);
    });
  });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  setupContactForm();
  setupFloatingLabels();
  setupScrollAnimations();
  setupStickyWhatsappButton();
  setupButtonRipples();
});
