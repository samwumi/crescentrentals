
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID from URL:", productId);  // Log the product ID

fetch("../product.json")
  .then(res => res.json())
  .then(products => {
    console.log("Available Products:", products);  // Log the fetched products
    const product = products.find(p => p.id === productId);

    if (!product) {
      document.body.innerHTML = "<h2 class='text-center mt-5'>Product not found</h2>";
      return;
    }

    console.log("Product Found:", product);  // Log the found product details

    // Update the page with product details
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.title;

    // Update WhatsApp link
    document.getElementById("whatsapp-link").href =
      `https://wa.me/234XXXXXXXXXX?text=I'm%20interested%20in%20renting%20the%20${encodeURIComponent(product.title)}`;
  })
  .catch(err => console.error("Error fetching products.json:", err));  // Catch fetch errors
