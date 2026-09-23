document.addEventListener('DOMContentLoaded', function () {
  var favicon = 'https://i.ibb.co/ZzdbKJy9/FVIP-LOGO-4-Bigger.png';
  if (!document.querySelector('link[rel="icon"]')) {
    document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="' + favicon + '"><link rel="apple-touch-icon" href="' + favicon + '">');
  }

  var brand = document.querySelector('.legal-brand');
  if (brand && !brand.querySelector('img')) {
    brand.insertAdjacentHTML('afterbegin', '<img src="' + favicon + '" alt="FVIP logo">');
  }

  if (!document.querySelector('.legal-footer')) {
    document.body.insertAdjacentHTML('beforeend',
      '<footer class="legal-footer"><div class="legal-footer-top">' +
      '<div class="legal-footer-brand"><div class="legal-footer-logo"><img src="' + favicon + '" alt="FVIP logo"><div><strong>Fish Valley</strong><span>Investments &amp; Property Ltd.</span></div></div><p>A registered Nigerian real estate company delivering trusted property investment and development solutions.</p></div>' +
      '<div><h2>Company</h2><a href="about.html">About FVIP</a><a href="about.html#team">Leadership</a><a href="about.html#partners">Partners</a></div>' +
      '<div><h2>Fish Valley Project</h2><a href="fish_valley_properties.html">Project Overview</a><a href="fish_valley_properties.html#development">Development</a><a href="contact.html#contact-main">Sales Enquiries</a></div>' +
      '<div><h2>Support</h2><a href="contact.html">Contact Us</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms & Conditions</a></div>' +
      '</div><div class="legal-footer-bottom"><span>© 2026 Fish Valley Investments &amp; Property Ltd. All rights reserved.</span><span>Registered in Nigeria.</span></div></footer>');
  }

  if (!document.getElementById('legal-justification-styles')) {
    document.head.insertAdjacentHTML('beforeend', '<style id="legal-justification-styles">.legal-wrap p:not(.effective){text-align:justify;text-justify:inter-word;hyphens:auto;-webkit-hyphens:auto}</style>');
  }

  if (!document.getElementById('legal-enhance-styles')) {
    document.head.insertAdjacentHTML('beforeend', '<style id="legal-enhance-styles">' +
      '.legal-head{padding:30px 7vw!important}.legal-brand{display:flex!important;align-items:center;gap:12px}.legal-brand img{width:44px;height:44px;object-fit:contain}.legal-footer{background:#091616;color:rgba(255,255,255,.48);padding:72px 7vw 0;margin-top:0}.legal-footer-top{max-width:1280px;margin:auto;display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr;gap:42px;padding-bottom:54px;border-bottom:1px solid rgba(255,255,255,.08)}.legal-footer-logo{display:flex;align-items:center;gap:12px}.legal-footer-logo img{width:40px;height:40px;object-fit:contain}.legal-footer-logo strong{display:block;font:600 18px/1.1 Playfair Display,Georgia,serif;color:#fff}.legal-footer-logo span{display:block;margin-top:3px;font-size:8px;letter-spacing:2.7px;text-transform:uppercase;color:#d8be7a}.legal-footer-brand p{max-width:280px;margin:18px 0 0;font-size:12.5px;line-height:1.9}.legal-footer h2{margin:0 0 18px;font:600 9px/1.2 DM Sans,Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#b9904a}.legal-footer a{display:block;margin:0 0 10px;color:rgba(255,255,255,.5);font-size:12px;text-decoration:none}.legal-footer a:hover{color:#d8be7a}.legal-footer-bottom{max-width:1280px;margin:auto;padding:22px 0;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:10px}@media(max-width:700px){.legal-head{padding:22px 18px!important}.legal-brand img{width:38px;height:38px}.legal-wrap{padding:54px 18px 64px!important}.legal-footer{padding:56px 18px 0}.legal-footer-top{grid-template-columns:1fr 1fr;gap:28px 20px}.legal-footer-brand{grid-column:1/-1}.legal-footer-bottom{flex-direction:column;text-align:center}.legal-wrap h1{font-size:clamp(34px,10vw,48px)!important}}@media(max-width:390px){.legal-footer-top{grid-template-columns:1fr}}</style>');
  }
});
