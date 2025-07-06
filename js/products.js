const products = {
    chair1: {
        title: "Chiavari Gold Chair",
        price: "$4",
        image: "img/chairs/t20.jpg",
        description: "Our Gold Chiavari chairs are more than just seating; they are a statement piece that elevates the entire event ambiance...",
        specs: {
            "Weight": "9lb",
            "Height": "16\"",
            "Width": "16\"",
            "Seat Color": "White",
            "Seat Type": "Cushion"
        },
        variants: [
            { color: "Black", image: "img/chairs/t20.jpg" },
            { color: "Gold", image: "img/chairs/t18.png" },
            { color: "White", image: "img/chairs/t6.png" },

        ]

    },
    chair2: {
        title: "Fan Back Folding Chair",
        price: "$1.50",
        image: "img/chairs/t2.png",
        description: "Our Fan back chairs are more than just functional seating; they are a design statement that enhances the aesthetic appeal of any space...",
        specs: {
            "Weight": "7lb",
            "Color": "White"
        }
    },

    table1: {
        title: "6 Foot Rectangular Table",
        price: "$10",
        image: "img/chairs/t4.jpg",
        description: "Rent a 6ft commercial Rectangular folding Table for $10 each, this table can accommodate 6 chairs or 8 chairs using the ends of table.",
        specs: {
            "Table Length": "6ft",
            "Shape": "Rectangular",
            "Seats": "6-8 people",
            "Material": "Commercial-grade plastic",
            "Foldable": "Yes"
        }
    },
    table2: {
        title: "8 Foot Rectangular Table",
        price: "$12",
        image: "img/chairs/t4.jpg",
        description: "Rent 8ft commercial rectangular Table for $12 each. This table can accommodate 8 chairs or 10 chairs using the ends of table, works great for serving buffet.",
        specs: {
            "Table Length": "8ft",
            "Shape": "Rectangular",
            "Seats": "8-10 people",
            "Material": "Commercial-grade plastic",
            "Ideal For": "Buffet setup"
        }
    },
    table3: {
        title: "60in or 5 Foot Round Table",
        price: "$13",
        image: "img/chairs/t4.jpg",
        description: "Rent a 5ft(60in) commercial Round Table for $13. This table can accommodate 6-8 chairs.",
        specs: {
            "Table Diameter": "60in (5ft)",
            "Shape": "Round",
            "Seats": "6-8 people",
            "Material": "Commercial-grade plastic",
            "Usage": "Banquets, Parties"
        }
    },
    table4: {
        title: "72in or 6ft Commercial Grade Round Table",
        price: "$15",
        image: "img/chairs/t15.png",
        description: "This table can accommodate 8-10 chairs.",
        specs: {
            "Table Diameter": "72in (6ft)",
            "Shape": "Round",
            "Seats": "8-10 people",
            "Material": "Commercial-grade plastic",
            "Use Case": "Weddings, Meetings or Large Gatherings"
        }
    },

    tableCollection: {
        title: "Table Collection",
        price: "", // leave blank or put "Varies"
        image: "img/chairs/tables-collection.jpg", // shared image for all
        description: "Browse our selection of rental tables. Choose a table from the dropdown below to view individual details.",
        specs: {},
        collection: ["table1", "table2", "table3"]
    },

    conc1: {
        title: "Popcorn Machine",
        price: "",
        image: "img/conc/conc2.jpg",
        description: "Rent this old fashioned 60-inch-tall Commercial High Production Popcorn Machine with the Cart. This top of the line machine pops 147 one-ounce bags per hour...",
        specs: {
            "Power": "1420W / 12 Amps",
            "Includes": "50 popcorn bags + kits",
            // "Add-on": "$10 for 25 extra kits"

        },
        variants: [
            { color: "Gold", image: "img/conc/conc2.jpg" },
            { color: "White", image: "img/conc/conc4.png" },
            // { color: "Black", image: "img/chairs/t1-black.jpg" }
        ]



    },
    conc2: {
        title: "Cotton Candy Machine",
        price: "",
        image: "img/conc/conc1.png",
        description: "Rent a High Production Commercial Cotton Candy machine. Perfect for any fun event.",
        specs: {
            "Power": "110V",
            "Includes": "Sugar sticks",
            "Capacity": "Up to 50 servings per hour"
        },

        variants: [
            { color: "Gold", image: "img/conc/conc1.png" },
            // { color: "Black", image: "img/chairs/t1-black.jpg" }
        ]

    },

    conc3: {
        title: "Snow Cone Machine",
        price: "",
        image: "img/conc/conc3.png",
        description: "Beat the heat and delight your guests with our fun and easy-to-use Snow Cone Machine! This party essential creates refreshing, icy treats in seconds — just add ice and syrup! With its bright design and efficient shaving blades, it's perfect for birthdays, school fairs, fundraisers, and summer gatherings. Kids and adults alike will enjoy customizing their cones with colorful flavors for a cool treat everyone will love!",
        specs: {
            "Type": "Electric Ice Shaver",
            "Output": "Quick Ice Shaving",
            "Includes": "Syrup not included",
            "Ideal For": "Summer Parties, Fairs, Fundraisers",
            "Ease of Use": "Add ice and flavor, done!"
        },

        variants: [
            { color: "White", image: "img/conc/conc3.png" },
            { color: "Black", image: "img/conc/conc5.jpg" }
        ]

    },


    heating1: {
        title: "Waycool Cooler",
        price: "$100",
        image: "img/heating&cooling/Waycool.png",
        description: "Powerful cooling solution for large event spaces, ensuring guest comfort.",
        specs: {
            "Power": "1200W",
            "Capacity": "5000 BTU",
            "Dimensions": "40in x 20in x 25in"
        }
    },
    bounce1: {
        title: "Standard Bounce House",
        price: "$120",
        image: "img/bounce/bounce1.jpg",
        description: "Fun and safe bounce house for parties of all ages.",
        specs: {
            "Size": "15ft x 15ft",
            "Material": "Heavy-duty vinyl",
            "Max Occupancy": "6 children"
        }
    },

    bounce2: {
        title: "Standard Bounce House",
        price: "$120",
        image: "img/bounce/bounce2.jpg",
        description: "Fun and safe bounce house for parties of all ages.",
        specs: {
            "Size": "15ft x 15ft",
            "Material": "Heavy-duty vinyl",
            "Max Occupancy": "6 children"
        }
    },


    tent1: {
        title: "20x20 Frame Tent",
        price: "$200",
        image: "img/tents/tent1.png",
        description: "Commercial grade 20x20 frame tent. Includes setup.",
        specs: {
            "Size": "20ft x 20ft",
            "Material": "Water-resistant polyester",
            "Includes": "Setup and teardown"
        },


        //   variants: [
        //   { color: "Black", image: "img/tents/tent8.jpg" },
        //   { color: "Black", image: "img/tents/tent1.png" },
        //   { color: "Black", image: "img/tents/tent4.png" },
        // ],
    },

    tent2: {
        title: "20x40 Frame Tent",
        price: "$400",
        image: "img/tents/tent4.png",
        description: "Our spacious 20x40 white frame tent is ideal for larger gatherings, weddings, or corporate events. Its high-quality structure ensures stability and weather resistance. Includes professional setup for your convenience.",
        specs: {
            "Size": "20x40 feet",
            "Color": "White",
            "Tent Type": "Frame Tent",
            "Setup Included": "Yes",
            "Capacity": "Up to 80 guests (seated)"
        }
    },



    yard1: {
        title: "Yard Sign",
        image: "img/yardsign/yard3.jpg",
        description: "Custom birthday yard sign for a special celebration.",
        specs: {
            "Material": "Weather-resistant corrugated plastic",
            "Size": "24in x 36in",
            "Customization": "Personalized text and colors"
        },

        variants: [
            { color: "Black", image: "img/yardsign/yard3.jpg" },
            { color: "Gold", image: "img/yardsign/yard4.jpg" },
            { color: "White", image: "img/yardsign/yard1.jpg" },
            { color: "White", image: "img/yardsign/yard7.jpg" },

        ]
    }
};


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = products[productId];

const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const specTable = document.getElementById("specTable");
const variantSelector = document.getElementById("variantSelector");

function renderProduct(item) {
    productImage.src = item.image;
    productTitle.textContent = item.title;
    productPrice.textContent = item.price;
    productDescription.textContent = item.description;

    specTable.innerHTML = '';
    Object.entries(item.specs || {}).forEach(([key, value]) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td class="fw-semibold">${key}</td><td>${value}</td>`;
        specTable.appendChild(row);
    });
}

if (!product) {
    document.body.innerHTML = '<div class="container text-center py-5"><h3>Product not found.</h3></div>';
} else if (product.collection) {
    // It's a grouped product (like tableCollection)
    variantSelector.style.display = 'flex';
    variantSelector.innerHTML = '';

    product.collection.forEach((id, idx) => {
        const item = products[id];
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.title = item.title;
        if (idx === 0) img.classList.add('selected');

        img.addEventListener('click', () => {
            renderProduct(item);
            Array.from(variantSelector.children).forEach(child => child.classList.remove('selected'));
            img.classList.add('selected');
        });

        variantSelector.appendChild(img);
    });

    // Show first product by default
    const firstItem = products[product.collection[0]];
    renderProduct(firstItem);
} else {
    // Single product
    renderProduct(product);

    // If it has variants
    if (product.variants && product.variants.length > 0) {
        variantSelector.style.display = 'flex';
        variantSelector.innerHTML = '';

        product.variants.forEach((variant, idx) => {
            const img = document.createElement('img');
            img.src = variant.image;
            img.alt = variant.color;
            if (idx === 0) img.classList.add('selected');

            img.addEventListener('click', () => {
                productImage.src = variant.image;
                Array.from(variantSelector.children).forEach(child => child.classList.remove('selected'));
                img.classList.add('selected');
            });

            variantSelector.appendChild(img);
        });
    } else {
        variantSelector.style.display = 'none';
    }
}

// Other product suggestions
const allProductList = Object.entries(products).filter(([id, p]) => id !== productId);
const suggestions = allProductList.slice(0, 3);
const otherProductsContainer = document.getElementById("otherProducts");

suggestions.forEach(([id, prod]) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";

    col.innerHTML = `
    <a href="product.html?id=${id}" class="text-decoration-none">
      <div class="suggest-card shadow-sm h-100">
        <div class="suggest-img">
          <img src="${prod.image}" alt="${prod.title}">
        </div>
        <div class="p-3">
          <h6 class="fw-bold text-dark mb-1">${prod.title}</h6>
          <p class="text-muted mb-1">${prod.price}</p>
          <p class="small text-secondary">${prod.description?.substring(0, 60)}...</p>
        </div>
      </div>
    </a>
  `;
    otherProductsContainer.appendChild(col);
});