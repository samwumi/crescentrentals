const allProducts = {
    chairs_and_tables: [
        {
            id: "chair1",
            title: "Chiavari Gold Chair",
            price: "$4",
            description: "Our Gold Chiavari chairs are more than just seating; they are a statement piece that elevates the entire event ambiance.",
            image: "img/chairs/t20.jpg"
        },
        {
            id: "chair2",
            title: "Fan Back Folding Chair",
            price: "$1.50",
            description: "Our Fan back chairs are more than just functional seating; they enhance the aesthetic appeal of any space.",
            image: "img/chairs/t2.png"
        },
        {
            id: "tableCollection",
            title: "Table Collection",
            price: "", // optional
            description: "Browse our different rental table types in one place.",
            image: "img/chairs/t4.jpg"
        },

        {
            id: "table4",
            title: "72in or 6ft Commercial Grade Round Table",
            price: "$15",
            description: "This table can accommodate 8-10 chairs.",
            image: "img/chairs/t15.png"
        },

    ],

    concessions: [
        {
            id: "conc1",
            title: "Popcorn Machine",
            price: "",
            description: "Rent this old fashioned 60-inch-tall Commercial High Production Popcorn Machine with the Cart. Pops 147 one-ounce bags per hour.",
            image: "img/conc/conc2.jpg"
        },
        {
            id: "conc2",
            title: "Cotton Candy Machine",
            price: "",
            description: "Rent a High Production Commercial Cotton Candy machine. Perfect for any fun event.",
            image: "img/conc/conc1.png"
        },

        {
            id: "conc3",
            title: "Snow Cone Machine",
            price: "",
            description: "Beat the heat and delight your guests with our fun and easy-to-use Snow Cone Machine! This party essential creates refreshing, icy treats in seconds — just add ice and syrup! With its bright design and efficient shaving blades, it's perfect for birthdays, school fairs, fundraisers, and summer gatherings. Kids and adults alike will enjoy customizing their cones with colorful flavors for a cool treat everyone will love!",
            image: "img/conc/conc3.png"
        },

    ],
    heating_cooling: [
        {
            id: "heating1",
            title: "Waycool Cooler",
            price: "$100",
            description: "Powerful cooling solution for large event spaces, ensuring guest comfort.",
            image: "img/heating&cooling/Waycool.png"
        }
    ],
    bounce_house: [
        {
            id: "bounce1",
            title: "Standard Bounce House",
            price: "$120",
            description: "Fun and safe bounce house for parties of all ages.",
            image: "img/bounce/bounce1.jpg"
        },

        {
            id: "bounce2",
            title: "Standard Bounce House",
            price: "$120",
            description: "Fun and safe bounce house for parties of all ages.",
            image: "img/bounce/bounce2.jpg"
        }
    ],
    event_tents: [
        {
            id: "tent1",
            title: "20x20 Frame Tent",
            price: "$200",
            description: "Commercial grade 20x20 frame tent. Includes setup.",
            image: "img/tents/tent1.png"
        },

        {
            id: "tent2",
            title: "20x40 Frame Tent",
            price: "$400",
            description: "Commercial grade 20x40 frame tent. Includes setup.",
            image: "img/tents/tent4.png"
        }

    ],

    yard_signs: [
        {
            id: "yard1",
            title: "Birthday Yard Sign",
            price: "",
            description: "Custom birthday yard sign for a special celebration.",
            image: "img/yardsign/yard3.jpg"
        }
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("id");
const productList = document.getElementById("productList");
const categoryName = document.getElementById("categoryName");

if (categoryId && allProducts[categoryId]) {
    categoryName.textContent = allProducts[categoryId][0].title.includes("Chair") ? "Chairs and Tables" : categoryId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    allProducts[categoryId].forEach(product => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-lg-4";
        col.innerHTML = `
     <a href="${product.id === 'tableCollection' ? 'product.html?id=tableCollection' : 'product.html?id=' + product.id}" class="text-decoration-none">
        <div class="product-card h-100 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <div class="product-img-wrapper">
              <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="p-3">
              <h5>${product.title}</h5>
              <p class="mb-2">${product.price}</p>
              <p>${product.description.substring(0, 80)}...</p>
            </div>
          </div>
        </a>
      `;
        productList.appendChild(col);
    });
} else {
    productList.innerHTML = '<div class="col-12 text-center"><p>No products found.</p></div>';
}