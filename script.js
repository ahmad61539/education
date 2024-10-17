window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none';

    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('show');
});

// Fungsi untuk menangani klik pada link navigasi
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hapus kelas "active" dari semua link
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    // Tambahkan kelas "active" ke link yang di klik
    link.classList.add('active');
  });
});