const productContainer = document.querySelector('.product-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const products = document.querySelectorAll('.product');

const maxVisibleProducts = 5; // Maximum number of products visible in the carousel
let currentIndex = 0;
let totalProducts = products.length;

function updateVisibility() {
    products.forEach((product, index) => {
        const isInRange = index >= currentIndex && index < currentIndex + maxVisibleProducts;
        product.style.display = isInRange ? 'block' : 'none';
    });
}

function showProduct(index) {
    currentIndex = Math.min(Math.max(index, 0), totalProducts - 1);
    updateVisibility();
    updateButtonState();
}

function updateButtonState() {
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= totalProducts - maxVisibleProducts;
}

prevBtn.addEventListener('click', () => {
    showProduct(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showProduct(currentIndex + 1);
});

// Initial display
updateVisibility();
updateButtonState();