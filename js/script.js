// Contact form: demo handling (no backend wired up yet).
// For a real deployment on Netlify, add `data-netlify="true"` to the <form> tag
// in index.html and Netlify will collect submissions automatically — no code needed.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();

      if (!name || !phone) {
        note.textContent = 'Будь ласка, заповніть ім\'я та телефон.';
        return;
      }

      // Placeholder confirmation. Replace with real submission logic
      // (Netlify Forms, email service, or API call) before going live.
      note.textContent = `Дякуємо, ${name}. Ми зателефонуємо на ${phone} найближчим часом.`;
      form.reset();
    });
  }
});
