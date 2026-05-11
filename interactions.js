const searchItems = [
  { title: "Anime Hoodies", detail: "Graphic hoodie picks for anime streetwear", href: "shop.html?category=hoodies", tags: ["anime", "hoodie", "naruto", "graphic"] },
  { title: "Oversized Tees", detail: "Relaxed t-shirts for everyday fits", href: "shop.html?category=tshirts", tags: ["oversized", "tee", "tshirt", "shirt"] },
  { title: "Street Hoodie", detail: "NPR 1,999 - bold anime hoodie", href: "shop.html?category=hoodies", tags: ["street", "hoodie"] },
  { title: "Custom Prints", detail: "Send a design reference on WhatsApp", href: "#contact", tags: ["custom", "print", "design"] },
  { title: "Kathmandu Delivery", detail: "Delivery support and order help", href: "#contact", tags: ["delivery", "kathmandu", "shipping"] },
  { title: "Size Guide", detail: "Find your hoodie and oversized fit", href: "size-guide.html", tags: ["size", "sizing", "fit"] }
];

const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
};

function initSmartSearch() {
  const search = document.querySelector("[data-smart-search]");
  if (!search) return;

  const input = search.querySelector("input");
  const results = search.querySelector("[data-search-results]");
  const form = search.querySelector("form");

  const renderResults = (query = "") => {
    const normalized = query.trim().toLowerCase();
    const matches = normalized
      ? searchItems.filter((item) => `${item.title} ${item.detail} ${item.tags.join(" ")}`.toLowerCase().includes(normalized))
      : searchItems.slice(0, 5);

    results.innerHTML = matches.map((item) => `
      <button class="search-result" type="button" data-href="${item.href}">
        <span><strong>${item.title}</strong><small>${item.detail}</small></span>
        <span class="search-arrow" aria-hidden="true">→</span>
      </button>
    `).join("");

    search.classList.toggle("is-open", matches.length > 0);
  };

  input.addEventListener("focus", () => renderResults(input.value));
  input.addEventListener("input", () => renderResults(input.value));

  results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-href]");
    if (button) window.location.href = button.dataset.href;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstResult = results.querySelector("[data-href]");
    window.location.href = firstResult?.dataset.href || "shop.html";
  });

  document.addEventListener("click", (event) => {
    if (!search.contains(event.target)) search.classList.remove("is-open");
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  elements.forEach((element) => observer.observe(element));
}

function initCommerceActions() {
  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector("[data-back-to-top]");
  const toast = document.querySelector("[data-cart-toast]");

  const onScroll = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", isScrolled);
    backToTop?.classList.toggle("is-visible", window.scrollY > 520);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!toast) return;
      toast.textContent = `${button.dataset.addCart} added to your style shortlist.`;
      toast.classList.remove("is-visible");
      window.requestAnimationFrame(() => toast.classList.add("is-visible"));
    });
  });

  document.querySelectorAll("[data-open-ai]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".support-ai-button")?.click();
    });
  });
}

function initHomeFilters() {
  const buttons = document.querySelectorAll("[data-home-filter]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.homeFilter;

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll("[data-product-wrapper]").forEach((wrapper) => {
        const product = wrapper.querySelector(".product");
        wrapper.hidden = filter !== "all" && product?.dataset.category !== filter;
      });
    });
  });
}

function initRecentlyViewed() {
  const viewed = document.querySelector("[data-recently-viewed]");
  if (!viewed) return;

  const stored = JSON.parse(localStorage.getItem("arRecentlyViewed") || "[]");
  const current = "AR Homepage";
  const next = [current, ...stored.filter((item) => item !== current)].slice(0, 4);
  localStorage.setItem("arRecentlyViewed", JSON.stringify(next));

  viewed.textContent = stored.length
    ? `Recently viewed: ${stored.slice(0, 3).join(", ")}`
    : "Recently viewed styles will appear here as you browse.";
}

ready(() => {
  initSmartSearch();
  initRevealAnimations();
  initCommerceActions();
  initHomeFilters();
  initRecentlyViewed();
});
