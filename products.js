const products = [

{
name:"Classic T-Shirt",
price:"Rs 999",
image:"ChatGPT Image Apr 1, 2026, 01_32_48 PM.png"
},

{
name:"Street Hoodie",
price:"Rs 1999",
image:"ChatGPT Image Apr 1, 2026, 01_34_24 PM.png"
},

{
name:"Premium Jacket",
price:"Rs 2499",
image:"ChatGPT Image Apr 1, 2026, 01_34_44 PM.png"
},

{
name:"Casual Shirt",
price:"Rs 1499",
image:"ChatGPT Image Apr 1, 2026, 01_35_10 PM.png"
},

{
name:"Designer Pants",
price:"Rs 1799",
image:"ChatGPT Image Apr 1, 2026, 01_36_31 PM.png"
},

{
name:"Fashion Dress",
price:"Rs 2199",
image:"ChatGPT Image Apr 1, 2026, 01_37_50 PM.png"
},

{
name:"Trendy Sweater",
price:"Rs 1699",
image:"ChatGPT Image Apr 1, 2026, 01_49_37 PM.png"
},

{
name:"Summer Collection",
price:"Rs 1299",
image:"ChatGPT Image Mar 30, 2026, 09_44_18 PM.png"
}

]

const container = document.getElementById("product-container")

let html = ""
products.forEach(product=>{

html += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<button>Order Now</button>

</div>

`

})

container.innerHTML = html