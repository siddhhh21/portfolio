/* ============================================================
   MODAL — open / close / keyboard / overlay-click
   ============================================================ */

const modal      = document.getElementById('modal');
const connectBtn = document.getElementById('connectBtn');
const modalClose = document.getElementById('modalClose');

function openModal() {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Open on Connect click
connectBtn.addEventListener('click', openModal);

// Close on × button
modalClose.addEventListener('click', closeModal);

// Close on overlay click (outside the card)
modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
