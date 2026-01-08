// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== Gallery Modal =====
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("modal-image");
const closeModal = document.querySelector(".modal-close");

// Ensure modal is hidden on page load
if (modal) {
  modal.classList.remove("active");
  modal.style.display = "none";
}

if (galleryItems && modal && modalImg && closeModal) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-image");
      modal.style.display = "flex";
      modal.classList.add("active");
      modalImg.src = imgSrc;
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    modal.classList.remove("active");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    // Close other FAQ items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Validate form
  if (!name || !email || !phone || !message) {
    alert("אנא מלא את כל השדות");
    return;
  }

  // Create mailto link with form data
  const subject = encodeURIComponent("פניה חדשה מאתר מובילים טורס");
  const body = encodeURIComponent(
    `שם: ${name}\n` +
      `אימייל: ${email}\n` +
      `טלפון: ${phone}\n\n` +
      `הודעה:\n${message}`
  );

  const mailtoLink = `mailto:7ms701@gmail.com?subject=${subject}&body=${body}`;

  // Open default email client
  window.location.href = mailtoLink;

  // Optional: Show success message
  alert("תודה על פנייתך! תיבת האימייל שלך תיפתח כעת.");

  // Reset form
  contactForm.reset();
});

// ===== Form Field Animations =====
const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea"
);

formInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", function () {
    if (!this.value) {
      this.parentElement.classList.remove("focused");
    }
  });
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
const animatedElements = document.querySelectorAll(
  ".service-card, .value-card, .gallery-item, .review-card, .faq-item, .about-content, .contact-content"
);

animatedElements.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ===== Hide/Show Floating Buttons on Scroll =====
let lastScrollTop = 0;
const floatingButtons = document.querySelectorAll(
  ".floating-cta, .whatsapp-float"
);

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Show buttons after scrolling down 300px
  if (scrollTop > 300) {
    floatingButtons.forEach((btn) => {
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
    });
  } else {
    floatingButtons.forEach((btn) => {
      btn.style.opacity = "0";
      btn.style.visibility = "hidden";
    });
  }

  lastScrollTop = scrollTop;
});

// Initially hide floating buttons
floatingButtons.forEach((btn) => {
  btn.style.opacity = "0";
  btn.style.visibility = "hidden";
  btn.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
});

// ===== Scroll Indicator Hide on Scroll =====
const scrollIndicator = document.querySelector(".scroll-indicator");

if (scrollIndicator) {
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      scrollIndicator.style.opacity = "0";
      scrollIndicator.style.visibility = "hidden";
    } else {
      scrollIndicator.style.opacity = "1";
      scrollIndicator.style.visibility = "visible";
    }
  });
}

// ===== Lazy Loading for Images =====
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// ===== Service Cards Stagger Animation =====
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// ===== Header Shadow on Scroll (if needed in future) =====
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Can be used for navbar shadow if added later
  if (scrollTop > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// ===== Phone Number Formatting =====
const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

    // Format: XXX-XXX-XXXX or 0XX-XXX-XXXX
    if (value.length > 0) {
      if (value.startsWith("0")) {
        // Israeli format with leading 0
        if (value.length <= 3) {
          value = value;
        } else if (value.length <= 6) {
          value = value.slice(0, 3) + "-" + value.slice(3);
        } else {
          value =
            value.slice(0, 3) +
            "-" +
            value.slice(3, 6) +
            "-" +
            value.slice(6, 10);
        }
      } else {
        // Format without leading 0
        if (value.length <= 2) {
          value = value;
        } else if (value.length <= 5) {
          value = value.slice(0, 2) + "-" + value.slice(2);
        } else {
          value =
            value.slice(0, 2) +
            "-" +
            value.slice(2, 5) +
            "-" +
            value.slice(5, 9);
        }
      }
    }

    e.target.value = value;
  });
}

// ===== Email Validation =====
const emailInput = document.getElementById("email");

if (emailInput) {
  emailInput.addEventListener("blur", function () {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      this.setCustomValidity("נא להזין כתובת אימייל תקינה");
      this.reportValidity();
    } else {
      this.setCustomValidity("");
    }
  });
}

// ===== Prevent Form Spam =====
let formSubmitted = false;

contactForm.addEventListener("submit", function (e) {
  if (formSubmitted) {
    e.preventDefault();
    alert("הטופס כבר נשלח. אנא המתן מספר דקות לפני שליחה חוזרת.");
    return false;
  }

  formSubmitted = true;

  // Reset after 2 minutes
  setTimeout(function () {
    formSubmitted = false;
  }, 120000);
});

// ===== Console Branding =====
console.log(
  "%c מובילים טורס ",
  "background: #4A90E2; color: white; font-size: 20px; padding: 10px;"
);
console.log(
  "%c Developed by Gindi Web Solutions ",
  "background: #1a1a1a; color: #50C4ED; font-size: 12px; padding: 5px;"
);

// ===== Performance: Debounce Scroll Events =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll events if needed
const debouncedScroll = debounce(function () {
  // Additional scroll handling can go here
}, 100);

window.addEventListener("scroll", debouncedScroll);
