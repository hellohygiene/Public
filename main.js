/**
 * Hello Hygiene — Main Core Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTheme();
  initMobileMenu();
  initQuoteBuilder();
});

// Sticky Header
function initHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// Dark/Light Theme Switching
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('hh-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', storedTheme);

  toggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('hh-theme', newTheme);
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.nav-links');

  btn?.addEventListener('click', () => {
    menu?.classList.toggle('active');
  });
}

// Dynamic Quote Builder Calculation
function initQuoteBuilder() {
  const form = document.getElementById('quote-builder-form');
  const totalDisplay = document.getElementById('quote-total');

  if (!form) return;

  form.addEventListener('input', () => {
    let total = 0;
    const items = form.querySelectorAll('.quote-item-qty');
    items.forEach(input => {
      const price = parseFloat(input.dataset.price || 0);
      const qty = parseInt(input.value || 0, 10);
      total += price * qty;
    });

    if (totalDisplay) {
      totalDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
  });
}