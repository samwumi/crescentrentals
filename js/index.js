// hero section
document.querySelectorAll('.carousel-img').forEach(img => {
      img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `<img src="${img.src}" onclick="this.parentElement.style.display='none'">`;
        document.body.appendChild(lightbox);
      });
    });








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
  form.addEventListener('submit', async function(event) {
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


