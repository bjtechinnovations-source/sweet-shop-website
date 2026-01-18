// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile menu
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.includes('#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== SCROLL ANIMATIONS (AOS) =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}

// ===== PRODUCT FILTER (for products page) =====
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Filter products
    productCards.forEach(card => {
        const productCategory = card.dataset.category;
        if (category === 'All' || productCategory === category) {
            card.style.display = 'block';
            // Add animation
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons if they exist
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterProducts(btn.dataset.category);
    });
});

// ===== ORDER / CONTACT FORM =====




const form = document.getElementById("orderForm");
const popup = document.getElementById("orderPopup");
const whatsappBtn = document.querySelector(".popup-btn.secondary");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            form.reset(); // Clear the form
            popup.classList.add("show"); // Show popup

            // Prepare WhatsApp message
            const name = formData.get("name");
            const phone = formData.get("phone");
            const email = formData.get("email");
            const address = formData.get("address");
            const product = formData.get("product");
            const quantity = formData.get("quantity");
            const delivery_date = formData.get("delivery_date") || "Not specified";
            const message = formData.get("message") || "No message";

            const whatsappMessage = `Hello Oberoi Bakers!%0A%0A` +
                `New Order Details:%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Phone: ${encodeURIComponent(phone)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A` +
                `Address: ${encodeURIComponent(address)}%0A` +
                `Product: ${encodeURIComponent(product)}%0A` +
                `Quantity: ${encodeURIComponent(quantity)}%0A` +
                `Delivery Date: ${encodeURIComponent(delivery_date)}%0A` +
                `Message: ${encodeURIComponent(message)}`;

            // WhatsApp link (India number)
            whatsappBtn.setAttribute("href", `https://wa.me/919872281511?text=${whatsappMessage}`);

        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("❌ Network error. Please try again.");
    }
});

// Close popup
function closePopup() {
    popup.classList.remove("show");
}





// ===== SCROLL TO TOP ON PAGE LOAD =====
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== ADD TO CART BUTTON FEEDBACK =====
const cartButtons = document.querySelectorAll('.btn-cart');
cartButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.backgroundColor = '#10b981';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
    });
});

// ===== TESTIMONIAL CARDS HOVER EFFECT =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

console.log('Sweet Delights - Website loaded successfully! 🍬');
