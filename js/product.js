fetch('../product.json')
  .then(res => res.json())
  .then(products => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const product = products.find(p => p.id === productId);

    if (!product) {
      document.getElementById("productTitle").textContent = "Product Not Found";
      return;
    }

    // Populate Main Details
    document.getElementById("productTitle").textContent = product.title || "Untitled";
    document.getElementById("productPrice").textContent = product.rental_price || "Price not specified";
    document.getElementById("productDescription").textContent = product.description || "No description available";
    document.getElementById("productImage").src = product.image || "img/placeholder.jpg";
    document.getElementById("productImage").alt = product.title || "Product Image";

    // Specifications
    document.getElementById("productWeight").textContent = product.weight || "N/A";
    document.getElementById("productHeight").textContent = product.height || "N/A";
    document.getElementById("productWidth").textContent = product.width || "N/A";
    document.getElementById("productSeatColor").textContent = product.seat_color || "N/A";
    document.getElementById("productSeatType").textContent = product.seat_type || "N/A";

    // Included items
    document.getElementById("productIncluded").innerHTML =
      product.included?.map(item => `<li>${item}</li>`).join("") || "<li>None listed</li>";

    // Optional Add-ons
    document.getElementById("productOptionalAddons").innerHTML =
      product.optional_add_ons?.map(item => `<li>${item}</li>`).join("") || "<li>None listed</li>";

    // Customer Provides
    document.getElementById("productCustomerProvides").innerHTML =
      product.customer_provides?.map(item => `<li>${item}</li>`).join("") || "<li>Nothing specified</li>";

    // Syrup Flavors
    document.getElementById("productSyrupFlavors").innerHTML =
      product.syrup_flavors?.map(flavor => `<li>${flavor}</li>`).join("") || "<li>Not applicable</li>";

    // Comparison Section
    if (product.comparison) {
      document.querySelector(".comparison").style.display = "block";
      document.getElementById("snowConeText").textContent = product.comparison.snow_cone || "";
      document.getElementById("shavedIceText").textContent = product.comparison.shaved_ice || "";
    } else {
      document.querySelector(".comparison").style.display = "none";
    }

    // WhatsApp Link
    const number = "234XXXXXXXXXX"; // Replace with real number
    document.getElementById("whatsapp-link").href =
      `https://wa.me/${number}?text=I'm%20interested%20in%20renting%20the%20${encodeURIComponent(product.title)}`;

    // Optional: Load other products section (if needed)
    // You can filter or display related items here based on category

  })
  .catch(error => {
    console.error("Error loading product data:", error);
    document.getElementById("productTitle").textContent = "Failed to load product.";
  });



fetch("../product.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("related-products");
    data.forEach(product => {
      container.innerHTML += `
        <div class="col-md-4">
          <a href="${product.link}">
            <img src="${product.image}" class="img-fluid" alt="${product.title}">
            <p>${product.title}</p>
          </a>
        </div>`;
    });
  });