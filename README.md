🍰 Oberoi Bakers – HTML/CSS/JS Website
🏪 Project Overview

This project is a fully converted HTML, CSS, and JavaScript website for Oberoi Bakers, a family-run bakery and sweet shop established in 1990.
The website reflects tradition, trust, and quality, offering Indian sweets (mithai) and bakery items with a modern, festive design.

📁 File Structure
/public/
├── index.html          - Home page
├── about.html          - About Us page
├── products.html       - Products page (to be created)
├── contact.html        - Contact & Order page (to be created)
├── styles.css          - Main stylesheet
├── script.js           - JavaScript functionality
└── README.md           - Project documentation

🚀 How to Use
Option 1: Open Directly in Browser

Open the /public/ folder

Double-click index.html

Navigate through pages using the menu

Option 2: Use a Local Server (Recommended)

For better testing and Netlify form behavior:



Then open:
👉 http://localhost:8000

🎨 Features Implemented
✅ Pages

 Home Page

 About Us Page

 Products Page (to be created)

 Contact & Order Page (to be created)

✅ Navigation

Sticky header

Responsive navigation menu

Mobile hamburger menu

Active link highlighting

✅ Animations

Scroll-based animations

Fade-in effects

Hover animations

Smooth transitions

✅ Styling

Indian festive color palette (saffron, cream, pink, golden tones)

Google Fonts: Playfair Display, Poppins, Inter

Gradient sections

Responsive, mobile-first layout

✅ Components

Feature cards

Stats counters

Testimonials

Call-to-action buttons

Footer with contact details

✅ JavaScript

Mobile menu toggle

Smooth scrolling

Scroll animations

Button interaction feedback

Form handling logic

🛍️ To Complete the Project
products.html

Create a products page with:

Product grid layout

Categories (Sweets, Bakery, Snacks, Cakes)

Hover effects

Optional JavaScript filtering

contact.html

Create a contact & order page with:

Address, phone, email cards

Netlify Order Form

<form name="order" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="order">
  <!-- Form fields -->
</form>


Success message

Google Map placeholder

🌐 Deploying to Netlify
Step 1: Prepare Files

Ensure all files are inside /public/

Step 2: Netlify Form Setup
<form name="order" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="order">
  <p class="hidden">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
</form>

Step 3: Deploy

Visit netlify.com

Drag & drop the /public/ folder

Site goes live instantly 🚀

🎯 “Order Now” Button Flow

Redirects to contact.html#order-form

Smooth scrolls to order section

Ready for Netlify form submission

Handled inside script.js.

🔧 Customization
Colors

Edit CSS variables:

:root {
  --primary: #f97316;
  --secondary: #ec4899;
  --gold: #d4af37;
}

Images

Replace placeholder images with real Oberoi Bakers photos:

<img src="images/shop.jpg" alt="Oberoi Bakers">

📞 Contact Information

Update everywhere on the site:

Shop Name: Oberoi Bakers

Established: 1990

Email: oberoibakers0@gmail.com

Location: Delhi, India

⚠️ Important Notes

Netlify forms work only after deployment

Replace demo images before production

Test responsiveness on mobile & tablet

📦 Next Steps

Create products.html

Create contact.html

Add real product images

Final testing

Deploy to Netlify

Made with ❤️ for Oberoi Bakers
Serving fresh sweets & bakery delights with trust since 1990

**Made with ❤️ for Oberoi Bakers**  
*Serving fresh sweets & bakery delights with trust since 1990*  

**Developed by BJ Tech Innovations**
