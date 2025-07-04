// hero section
document.querySelectorAll('.carousel-img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${img.src}" onclick="this.parentElement.style.display='none'">`;
    document.body.appendChild(lightbox);
  });
});




//  Rental Categories Logic
const rentalCategories = {
  "chairs_and_tables": {
    name: "Chairs and Tables",
    description: "Elegant chairs and commercial tables perfect for any event.",
    image: "img/hero1.jpg"
  },
  "concessions": {
    name: "Concessions",
    description: "Delicious concession machines and supplies for your event.",
    image: "img/conc/conc1.png"
  },
  "heating_cooling": {
    name: "Heating & Cooling",
    description: "Keep your guests comfortable with commercial-grade equipment.",
    image: "img/heating&cooling/Waycool.png"
  },
  "bounce_house": {
    name: "Bounce House",
    description: "Fun and safe bounce houses for parties of all ages.",
    image: "img/bounce/bounce1.jpg"
  },
  "event_tents": {
    name: "Event Tents",
    description: "Commercial grade frame tents for any event. Setup included.",
    image: "img/tents/tent1.png"
  },
  "yard_signs": {
    name: "Yard Signs",
    description: "Custom yard signs for any celebration.",
    image: "img/yardsign/yard3.jpg"
  }
};

const rentalsGrid = document.getElementById("rentalsGrid");

Object.entries(rentalCategories).forEach(([key, cat]) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4";

  col.innerHTML = `
      <a href="category.html?id=${key}" class="text-decoration-none" aria-label="View ${cat.name} Products">
        <div class="service-card" data-aos="fade-up">
          <div class="image-wrapper">
            <img class="card-img-top" src="${cat.image}" alt="${cat.name}" loading="lazy" />
            <div class="overlay">View Products</div>
          </div>
          <h5>${cat.name}</h5>
          <p>${cat.description}</p>
        </div>
      </a>
    `;

  rentalsGrid.appendChild(col);
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.rental-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = item.getAttribute('data-id');
      if (productId) {
        window.location.href = `product.html?id=${productId}`;
      }
    });
  });
});



//Gallery Logic
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.rental-item');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  let itemsToShow = 6;
  const increment = 3;

  console.log(loadMoreBtn)

  function showItems() {
    items.forEach((item, index) => {
      if (index < itemsToShow) {
        item.style.display = "block";
      }
    });

    if (itemsToShow >= items.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Initial load
  showItems();

  loadMoreBtn.addEventListener('click', function () {
    itemsToShow += increment;
    showItems();
  });
});

// filter functionality

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const rentalItems = document.querySelectorAll('.rental-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Remove active class from all buttons and add to the clicked button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      rentalItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block'; // Show item
        } else {
          item.style.display = 'none'; // Hide item
        }
      });
    });
  });
});


const form = document.getElementById('smsForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch('https://hook.us2.make.com/l1ymk1xbu8kxiubpyit5jb5q2icl4hsc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    alert('Error sending message.');
    console.error(error);
  }
});


