/* Fairtech Engineers — shared site behaviour (no dependencies) */
(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Highlight the current page in the nav ---- */
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  /* ---- Shadow under sticky nav once the page scrolls ---- */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var onScroll = function () {
      navbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Reveal-on-scroll ---- */
  var revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Graceful fallback for images that are not in images/ yet ----
     Cards keep their layout and show the item name on a striped panel
     instead of a broken-image icon. Once the real file is added to
     images/, the photo shows automatically — no markup change needed. */
  document.querySelectorAll(".card-media img, .media img").forEach(function (img) {
    img.addEventListener("error", function () {
      var wrap = img.closest(".card-media, .media");
      if (!wrap) return;
      wrap.classList.add("img-missing");
      if (!wrap.hasAttribute("data-label")) {
        wrap.setAttribute("data-label", img.getAttribute("alt") || "Image");
      }
    });
    /* Handle images that failed before this script ran */
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });

  var brandLogo = document.querySelector(".brand-logo");
  if (brandLogo) {
    brandLogo.addEventListener("error", function () {
      brandLogo.classList.add("img-error");
    });
    if (brandLogo.complete && brandLogo.naturalWidth === 0) {
      brandLogo.classList.add("img-error");
    }
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
