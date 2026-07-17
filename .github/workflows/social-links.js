/* ═══════════════════════════════════════════════════════════
   FVIP SOCIAL LINKS — single source of truth
   Edit the URLs below and every page updates automatically.
   Leave a value as "" (empty string) to keep that icon shown
   but inactive/disabled until you have a real link ready.
═══════════════════════════════════════════════════════════ */
window.FVIP_SOCIAL = {
  instagram: "https://www.instagram.com/officialfvip/",
  linkedin:  "",
  facebook:  "",
  whatsapp:  "https://wa.me/2349117415120",
  twitter:   "",
  youtube:   "",
  tiktok:    ""
};

(function wireSocialLinks() {
  function init() {
    var links = document.querySelectorAll("[data-social]");
    links.forEach(function (el) {
      var key = el.getAttribute("data-social");
      var url = window.FVIP_SOCIAL[key];
      if (url) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        el.removeAttribute("aria-disabled");
        el.classList.remove("is-disabled");
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("tabindex", "-1");
        el.classList.add("is-disabled");
        el.title = "Coming soon";
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
