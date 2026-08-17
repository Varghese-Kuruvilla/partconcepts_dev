document.addEventListener('DOMContentLoaded', function () {
  // Copy BibTeX to clipboard
  var copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var text = document.querySelector('.bibtex-wrap pre').innerText;
      navigator.clipboard.writeText(text).then(function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = original; }, 1800);
      });
    });
  }

  // Back-to-top button
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 800) {
        toTop.classList.add('visible');
      } else {
        toTop.classList.remove('visible');
      }
    });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Gallery carousels (one per .gallery-panel)
  document.querySelectorAll('.gallery-panel').forEach(function (panel) {
    var track = panel.querySelector('.gallery-track');
    var slides = Array.prototype.slice.call(panel.querySelectorAll('.gallery-slide'));
    var dotsWrap = panel.querySelector('.gallery-dots');
    var prevBtn = panel.querySelector('.gallery-arrow.prev');
    var nextBtn = panel.querySelector('.gallery-arrow.next');
    var counter = panel.querySelector('.gallery-counter');
    var index = 0;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'gallery-dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('.gallery-dot'));

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
      if (counter) counter.textContent = (index + 1) + ' / ' + slides.length;
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1); });

    render();
  });

  // Gallery category tabs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    var tabs = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-tab'));
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        gallery.querySelectorAll('.gallery-panel').forEach(function (panel) {
          panel.classList.toggle('active', panel.getAttribute('data-panel') === tab.getAttribute('data-target'));
        });
      });
    });
  });
});
