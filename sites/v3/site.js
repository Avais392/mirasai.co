(function () {
  var header = document.querySelector("header");
  var toggle = header?.querySelector('button[aria-label="Toggle menu"]');
  var nav = document.createElement("nav");
  nav.className = "miras-nav-mobile";
  nav.setAttribute("aria-label", "Mobile navigation");
  nav.innerHTML = '<a href="/v3/work">Work</a><a href="/v3/services">Services</a><a href="/v3/about">About</a><a href="/v3/contact">Contact</a><a href="/v3/contact">Discuss a project</a>';
  header?.appendChild(nav);
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) nav.classList.remove("is-open");
  });

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var feedback = document.createElement("p");
    feedback.id = "form-feedback";
    feedback.hidden = true;
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    form.insertAdjacentElement("afterend", feedback);

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = "Sending…";
      feedback.hidden = false;
      feedback.textContent = "Sending your message…";

      try {
        var payload = Object.fromEntries(new FormData(form).entries());
        var result = await fetch("https://formsubmit.co/ajax/hello@mirasai.co", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
        });
        var data = await result.json();
        if (!result.ok || String(data.success) !== "true") throw new Error(data.message || "Unable to send message.");
        feedback.textContent = "Thank you. Your message has been sent to Miras AI.";
        form.reset();
      } catch (error) {
        feedback.textContent = error.message || "We could not send your message. Please email hello@mirasai.co directly.";
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    });
  }

  var banner = document.querySelector(".miras-cookie-banner");
  try { if (localStorage.getItem("miras-cookie-choice")) banner.hidden = true; } catch (_) { banner.hidden = true; }
  document.querySelectorAll("[data-cookie-choice]").forEach(function (element) {
    element.addEventListener("click", function () {
      try { localStorage.setItem("miras-cookie-choice", element.dataset.cookieChoice); } catch (_) {}
      banner.hidden = true;
    });
  });
})();
