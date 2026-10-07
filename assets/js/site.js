/* CaLa Studios site: fills in the footer year. No dependencies. */
document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
