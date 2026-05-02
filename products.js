const products = [
  {
    name: "Classic T-Shirt",
    price: 999,
    category: "tshirts",
    image: "images/tshirts/download (4).jpg",
    tag: "Streetwear T-Shirts"
  },
  {
    name: "Street Hoodie",
    price: 1999,
    category: "hoodies",
    image: "images/hoodies/ChatGPT Image Apr 1, 2026, 01_34_24 PM.png",
    tag: "Anime Hoodies"
  },
  {
    name: "Oversized Hoodie",
    price: 2199,
    category: "hoodies",
    image: "images/hoodies/ChatGPT Image Apr 1, 2026, 01_34_44 PM.png",
    tag: "Oversized Hoodies"
  },
  {
    name: "Casual Shirt",
    price: 1499,
    category: "tshirts",
    image: "images/tshirts/download (5).jpg",
    tag: "Streetwear T-Shirts"
  },
  {
    name: "Premium Streetwear Layer",
    price: 2499,
    category: "hoodies",
    image: "images/hoodies/ChatGPT Image Apr 1, 2026, 01_35_10 PM.png",
    tag: "Oversized Hoodies"
  },
  {
    name: "Anime Graphic Fit",
    price: 2299,
    category: "hoodies",
    image: "images/hoodies/ChatGPT Image Apr 1, 2026, 01_49_37 PM.png",
    tag: "Anime Hoodies"
  },
  {
    name: "Street Design #1",
    price: 1799,
    category: "designs",
    image: "images/designs/ad638c3479a243f7c30dced26058b408.jpg",
    tag: "Streetwear Designs"
  },
  {
    name: "Street Design #2",
    price: 1899,
    category: "designs",
    image: "images/designs/b4e8ce6ebed2d58547d925118eb93cff.jpg",
    tag: "Streetwear Designs"
  },
  {
    name: "Street Design #3",
    price: 1799,
    category: "designs",
    image: "images/designs/c45996111bd15fd5b35c167346c0f03b.jpg",
    tag: "Streetwear Designs"
  },
  {
    name: "Street Design #4",
    price: 1699,
    category: "designs",
    image: "images/designs/fcedfafcb577016eb5e6865c858f6022.jpg",
    tag: "Streetwear Designs"
  },
  {
    name: "Street Design #5",
    price: 1999,
    category: "designs",
    image: "images/designs/fde02d990e22af86c199e07fef205b05.jpg",
    tag: "Streetwear Designs"
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
    container.innerHTML = '<div class="col-12"><p class="empty-state">No products found in this category.</p></div>';
    return;
  }

  container.innerHTML = visibleProducts
    .map((product) => {
      let altText = `${product.name} - ${product.tag} Nepal AR Clothing Zone`;
      if (product.category === "hoodies") {
        altText = `${product.name} anime hoodie Nepal oversized streetwear`;
      } else if (product.category === "tshirts") {
        altText = `${product.name} streetwear tshirt Kathmandu Nepal`;
      } else if (product.category === "designs") {
        altText = `${product.name} streetwear design Nepal AR Clothing Zone`;
      }
      return `
      <div class="col-md-4 col-lg-3">
        <article class="product card shadow-sm h-100">
          <div class="product-image">
            <img src="${product.image}" alt="${altText}" loading="lazy" class="card-img-top img-fluid">
          </div>
          <div class="product-details card-body d-flex flex-column">
            <span>${product.tag}</span>
            <h3 class="h5">${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <a href="https://wa.me/9779746955071" target="_blank" rel="noopener noreferrer" class="btn btn-dark w-100 mt-auto">Order via WhatsApp</a>
          </div>
        </article>
      </div>
    `;
    })
    .join("");
}

function setupProductFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || "all";
  const validCategories = ["all", "hoodies", "tshirts", "designs"];
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
