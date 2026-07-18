/* ═══════════════════════════════════════════════════════════
   FVIP SITE ENHANCEMENTS
   Shared performance + responsiveness helpers used on every page.
═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var mqReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mqSmall = window.matchMedia("(max-width: 900px)");
  var mqCoarse = window.matchMedia("(hover: none), (pointer: coarse)");

  function applyMotionClass() {
    var lite = mqReducedMotion.matches || mqSmall.matches || mqCoarse.matches;
    document.documentElement.classList.toggle("fx-lite", lite);
  }
  applyMotionClass();
  [mqReducedMotion, mqSmall, mqCoarse].forEach(function (mq) {
    if (mq.addEventListener) mq.addEventListener("change", applyMotionClass);
    else if (mq.addListener) mq.addListener(applyMotionClass);
  });

  /* A discreet, keyboard-accessible return-to-top control on every page. */
  function addBackToTop() {
    if (document.querySelector(".back-to-top")) return;
    var button = document.createElement("button");
    button.className = "back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Back to top");
    button.setAttribute("title", "Back to top");
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    document.body.appendChild(button);

    function updateBackToTop() {
      button.classList.toggle("is-visible", window.scrollY > 420);
    }
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    button.addEventListener("click", function () {
      var scrollRoot = document.scrollingElement || document.documentElement;
      if (scrollRoot && scrollRoot.scrollTo) {
        scrollRoot.scrollTo({ top: 0, behavior: mqReducedMotion.matches ? "auto" : "smooth" });
      } else if (scrollRoot) {
        scrollRoot.scrollTop = 0;
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addBackToTop);
  else addBackToTop();

  /* Use index.html as the one canonical homepage from every navigation menu. */
  document.querySelectorAll('a[href="home.html"], a[href^="home.html#"]').forEach(function (link) {
    var target = link.getAttribute("href");
    link.setAttribute("href", target === "home.html" ? "index.html" : "index.html" + target.slice("home.html".length));
  });

  /* Browsers can restore a previous page from cache with its transition
     overlay still active. Clear it each time the page becomes visible so
     navigation links and hero CTAs remain clickable. */
  function resetPageTransition() {
    document.querySelectorAll("#pt, #pageTransition").forEach(function (overlay) {
      overlay.classList.remove("in", "out");
      overlay.style.removeProperty("animation");
    });
  }
  window.addEventListener("pageshow", resetPageTransition);
  resetPageTransition();

  /* Pause CSS marquees (partner logos, ticker) when off-screen to save CPU/battery */
  var marquees = document.querySelectorAll(".partners-track, .tk-track");
  if ("IntersectionObserver" in window && marquees.length) {
    var mo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
      },
      { threshold: 0.01 }
    );
    marquees.forEach(function (m) { mo.observe(m); });
  }

  /* Touch-friendly nav dropdowns: on touch devices, first tap opens the
     dropdown instead of navigating, second tap on the same link follows it.
     Only matters on wide touchscreens that still show the full nav
     (below the 1024px hamburger breakpoint the mobile menu is used instead). */
  if (mqCoarse.matches) {
    document.querySelectorAll(".nav-item").forEach(function (item) {
      var link = item.querySelector(":scope > .nav-link");
      var dd = item.querySelector(":scope > .nav-dd");
      if (!link || !dd) return;
      link.addEventListener("click", function (e) {
        if (!item.classList.contains("dd-open")) {
          document.querySelectorAll(".nav-item.dd-open").forEach(function (o) {
            if (o !== item) o.classList.remove("dd-open");
          });
          item.classList.add("dd-open");
          e.preventDefault();
        }
      });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-item")) {
        document.querySelectorAll(".nav-item.dd-open").forEach(function (o) {
          o.classList.remove("dd-open");
        });
      }
    });
  }
})();
