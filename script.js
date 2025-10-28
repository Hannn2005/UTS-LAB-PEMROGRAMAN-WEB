document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const searchInput = searchForm.querySelector('input[type="text"]');
            const query = searchInput.value;
            
            if (query) {
                console.log(`Mencari event untuk: ${query}`);
            }
        });
    }

    const categoryItems = document.querySelectorAll('.category-item');
    if (categoryItems) {
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                const category = item.getAttribute('data-category');
                console.log(`Memfilter event berdasarkan kategori: ${category}`);
            });
        });
    }

  
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'checkout_page/checkout.html';
        });
    });

});