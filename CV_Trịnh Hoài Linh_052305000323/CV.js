
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
  });
});


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('show');
});
// Đóng menu khi chọn một liên kết
const menuLinks = document.querySelectorAll('#mobileMenu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('show');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  if (footer) {
    observer.observe(footer);
  }
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
