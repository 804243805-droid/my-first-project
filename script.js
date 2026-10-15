document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.querySelector(".nav-button");
  const buttons = document.querySelectorAll(".primary-button, .secondary-button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
    });
  });

  if (navButton) {
    navButton.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }
});
