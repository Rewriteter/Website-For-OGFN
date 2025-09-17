document.addEventListener("DOMContentLoaded", () => {
  // Check maintenance mode
  if (typeof CONFIG !== "undefined" && CONFIG.maintenance === true) {
    if (!window.location.href.includes("maintenance.html")) {
      window.location.href = "maintenance.html";
    }
  }

  // Theme toggle
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });
  }
});
