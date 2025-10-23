// Small JS for footer year and contact form validation + success alert
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      for (const [key, value] of data.entries()) {
        if (!value || String(value).trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
        }
      }
      const email = data.get('email');
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        alert('Please enter a valid email address.');
        return;
      }
      alert('Form submitted successfully!');
      form.reset();
    });
  }
});
