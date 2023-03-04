export default function smoothTabScroll() {
  const menuItens = document.querySelectorAll("[data-animation='smooth scroll'] [href^='#']");

  menuItens.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Prevents normal behavior
      event.preventDefault();
      const id = event.currentTarget.getAttribute("href");

      console.log(id);

      const section = document.querySelector(id);

      // Change scroll behavior
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
