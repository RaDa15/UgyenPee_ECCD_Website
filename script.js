/**
 * ==========================================================================
 * UGYENPEE ECCD — SCRIPT (script.js)
 * Interactive UI behaviors: Carousel, Navigation, Accordion, Lightbox, Modal
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Hero Image Carousel (Slider & Dots)
     -------------------------------------------------------------------------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!slides.length) return;

    // Handle circular index
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update dot indicators
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  // Bind clicks to dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.dataset.slide, 10);
      showSlide(targetIndex);
      startAutoSlide(); // Reset auto timer
    });
  });

  // Start auto rotation
  if (slides.length > 1) {
    startAutoSlide();
  }


  /* --------------------------------------------------------------------------
     2. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close mobile drawer when clicking a navigation link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }


  /* --------------------------------------------------------------------------
     3. Admissions FAQ Accordion
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // Close all other accordion items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isCurrentlyActive) {
        item.classList.add('active');
      }
    });
  });


  /* --------------------------------------------------------------------------
     4. Gallery Filter Tabs
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.dataset.filter;

      galleryCards.forEach(card => {
        if (filterCategory === 'all' || card.dataset.category === filterCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* --------------------------------------------------------------------------
     5. Gallery Lightbox Modal
     -------------------------------------------------------------------------- */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  window.openLightbox = function(cardElement) {
    if (!lightboxModal) return;
    const img = cardElement.querySelector('img');
    const title = cardElement.querySelector('.gallery-card-title')?.innerText || '';
    const tag = cardElement.querySelector('.gallery-card-tag')?.innerText || '';

    lightboxImg.src = img.src;
    lightboxCaption.innerText = tag ? `${tag} — ${title}` : title;
    lightboxModal.classList.add('open');
  };

  window.closeLightbox = function() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }


  /* --------------------------------------------------------------------------
     6. Admissions Enquiry Modal & Form Submission
     -------------------------------------------------------------------------- */
  const enquiryModal = document.getElementById('enquiryModal');
  const modalClose = document.getElementById('modalClose');
  const admissionForm = document.getElementById('admissionForm');
  const formSuccess = document.getElementById('formSuccess');
  const topicInput = document.getElementById('modalTopicInput');

  window.openEnquiryModal = function(preferredTopic = '') {
    if (!enquiryModal) return;
    if (topicInput && preferredTopic) {
      topicInput.value = preferredTopic;
    }
    admissionForm.style.display = 'block';
    if (formSuccess) formSuccess.style.display = 'none';
    enquiryModal.classList.add('open');
  };

  window.closeEnquiryModal = function() {
    if (!enquiryModal) return;
    enquiryModal.classList.remove('open');
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeEnquiryModal);
  }

  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) closeEnquiryModal();
    });
  }

  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      admissionForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    });
  }


  /* --------------------------------------------------------------------------
     7. Keyboard Escape Key Listener
     -------------------------------------------------------------------------- */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEnquiryModal();
      closeLightbox();
      if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
        if (mobileToggle) mobileToggle.innerHTML = '&#9776;';
      }
    }
  });

});
