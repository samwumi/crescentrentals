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
