const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".intro__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".intro__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".intro__grid", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".intro__content h4", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".intro__flex div", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 500,
});

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 500,
});

const mixer = mixitup(".portfolio__grid");

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".testimonial__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".skill__item", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  delay: 500,
});

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const icon = themeToggleBtn.querySelector('i');
  icon.classList.toggle('ri-moon-line');
  icon.classList.toggle('ri-sun-line');
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.testimonials__slider', {
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 30, // Space between slides in pixels
    loop: false, // Enable infinite looping
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Automatic sliding every 5 seconds
    },
    breakpoints: {
      // Adjust number of slides based on screen width
      640: {
        slidesPerView: 1, // For smaller screens, show 1 slide
      },
      768: {
        slidesPerView: 2, // For medium screens, show 2 slides
      },
      1024: {
        slidesPerView: 3, // For larger screens, show 3 slides
      },
    },
  });

  const form = document.querySelector('.contact__form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      alert('Thank you for your message. It has been sent.');
      form.reset();
    } else {
      alert('There was a problem sending your message. Please try again.');
    }
  });

  const skillsSwiper = new Swiper('.skills__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // WhatsApp button animation
  const whatsappButton = document.querySelector('.whatsapp-button');
  const whatsappMessage = document.querySelector('.whatsapp-message');

  function showWhatsAppButton() {
    whatsappButton.classList.add('animate');
    whatsappMessage.classList.add('show');
    setTimeout(() => {
      whatsappButton.classList.remove('animate');
      whatsappMessage.classList.remove('show');
    }, 5000);
  }

  setInterval(showWhatsAppButton, 10000); // Show every 10 seconds

  function showWhatsAppMessage() {
    whatsappMessage.classList.add('show');
    setTimeout(() => {
      whatsappMessage.classList.remove('show');
    }, 5000);
  }

  setInterval(showWhatsAppMessage, 10000); // Show every 10 seconds

  // WhatsApp message pop-up function
  function showWhatsAppMessage() {
    const whatsappPopup = document.createElement('div');
    whatsappPopup.id = 'whatsapp-popup';
    whatsappPopup.style.position = 'fixed';
    whatsappPopup.style.bottom = '20px';
    whatsappPopup.style.right = '20px';
    whatsappPopup.style.backgroundColor = '#25D366'; // WhatsApp green
    whatsappPopup.style.color = 'white';
    whatsappPopup.style.padding = '10px 20px';
    whatsappPopup.style.borderRadius = '10px';
    whatsappPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    whatsappPopup.style.display = 'flex';
    whatsappPopup.style.alignItems = 'center';
    whatsappPopup.style.cursor = 'pointer';

    const message = document.createElement('p');
    message.innerText = 'Need help? Chat with us on WhatsApp!';
    message.style.margin = '0 10px 0 0';

    const icon = document.createElement('img');
    icon.src = 'assets/whatsapp-icon.png'; // Replace with your WhatsApp icon path
    icon.alt = 'WhatsApp';
    icon.style.width = '24px';
    icon.style.height = '24px';

    whatsappPopup.appendChild(message);
    whatsappPopup.appendChild(icon);
    document.body.appendChild(whatsappPopup);

    whatsappPopup.addEventListener('click', () => {
      window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
    });

    setTimeout(() => {
      document.body.removeChild(whatsappPopup);
    }, 5000); // Remove the pop-up after 5 seconds
  }

  // Trigger the message every 10 seconds
  setInterval(showWhatsAppMessage, 10000);

  // Optional: Show the message immediately on page load
  window.addEventListener('load', showWhatsAppMessage);

  // Scroll progress bar
  const scrollProgress = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
  }

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress(); // Initial call to set the progress bar width

  // Typing effect
  const typingElement = document.getElementById('typing-effect');
  const texts = ["a Software Engineer", "a Web Developer", "a Graphic Designer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, isDeleting ? 100 : 200);
  }

  type();

  // Initialize ScrollReveal for skills section
  ScrollReveal().reveal('.skills__list', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 500,
    reset: true
  });

  ScrollReveal().reveal('.skill__item', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    interval: 100,
    reset: true
  });

  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close the menu when a link is clicked
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
    }
  });
});
