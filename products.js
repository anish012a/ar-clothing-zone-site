// /products.js

const products = [

{
name:"Classic T-Shirt",
price:999,
image:"images/classic-tshirt.png"
},

{
name:"Street Hoodie",
price:1999,
image:"images/street-hoodie.png"
},

{
name:"Premium Jacket",
price:2499,
image:"images/premium-jacket.png"
},

{
name:"Casual Shirt",
price:1499,
image:"images/casual-shirt.png"
},

{
name:"Designer Pants",
price:1799,
image:"images/designer-pants.png"
},

{
name:"Fashion Dress",
price:2199,
image:"images/fashion-dress.png"
}

];


const container =
document.getElementById(
"product-container"
);


if(container){

let html="";

products.forEach(product=>{

html+=`

<div class="product">

<img
src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p>Rs ${product.price}</p>

<button>
Order Now
</button>

</div>

`;

});

container.innerHTML=html;

}