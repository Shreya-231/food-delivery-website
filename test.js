// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations using IntersectionObserver
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.3,
    };
  
    const revealOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(revealOnScroll, options);
    sections.forEach(section => {
      section.classList.add("hidden-section");
      observer.observe(section);
    });
  
    // Optional: Add smooth scroll for anchor links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection?.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Simulate contact button behavior
    const contactBtn = document.querySelector(".connect .btn");
    contactBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thank you for your interest! We'll get back to you shortly.");
    });
  
    // Optional: Cart icon interaction (console log for now)
    const cartIcons = document.querySelectorAll(".bx-cart-alt");
    cartIcons.forEach((icon, index) => {
      icon.style.cursor = "pointer";
      icon.addEventListener("click", () => {
        const itemName = icon.parentElement.querySelector("h2").innerText;
        console.log(`Added to cart: ${itemName}`);
        alert(`Added "${itemName}" to your cart.`);
      });
    });
  
    // Placeholder for future responsive nav toggle
    // Example:
    // const menuToggle = document.querySelector('.menu-toggle');
    // menuToggle?.addEventListener('click', () => {
    //   document.querySelector('.navbar').classList.toggle('active');
    // });
  });
  