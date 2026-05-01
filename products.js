const products = [
  {
    name: "Classic T-Shirt",
    price: 999,
    category: "shirts",
    image: "ChatGPT Image Apr 1, 2026, 01_32_48 PM.png",
    tag: "Everyday essential"
  },
  {
    name: "Street Hoodie",
    price: 1999,
    category: "hoodies",
    image: "ChatGPT Image Apr 1, 2026, 01_34_24 PM.png",
    tag: "Soft fleece"
  },
  {
    name: "Premium Jacket",
    price: 2499,
    category: "jackets",
    image: "ChatGPT Image Apr 1, 2026, 01_35_10 PM.png",
    tag: "Layered look"
  },
  {
    name: "Casual Shirt",
    price: 1499,
    category: "shirts",
    image: "ChatGPT Image Apr 1, 2026, 01_36_31 PM.png",
    tag: "Smart casual"
  },
  {
    name: "Designer Pants",
    price: 1799,
    category: "pants",
    image: "ChatGPT Image Apr 1, 2026, 01_37_50 PM.png",
    tag: "Modern fit"
  },
  {
    name: "Fashion Dress",
    price: 2199,
    category: "dresses",
    image: "ChatGPT Image Apr 1, 2026, 01_49_37 PM.png",
    tag: "Statement style"
  }
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0
  }).format(price);
}

function renderProducts(category = "all") {
  const container = document.getElementById("product-container");

  if (!container) {
    return;
  }

  const visibleProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  if (visibleProducts.length === 0) {
    container.innerHTML = '<p class="empty-state">No products found in this category.</p>';
    return;
  }

  container.innerHTML = visibleProducts
    .map((product) => `
      <article class="product">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-details">
          <span>${product.tag}</span>
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>
          <a href="contact.html" class="product-action">Order Now</a>
        </div>
      </article>
    `)
    .join("");
}

function setupProductFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || "all";
  const validCategories = ["all", "hoodies", "shirts", "jackets", "pants", "dresses"];
  const activeCategory = validCategories.includes(initialCategory) ? initialCategory : "all";

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === activeCategory);

    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts(category);
    });
  });

  renderProducts(activeCategory);
}

document.addEventListener("DOMContentLoaded", setupProductFilters);
