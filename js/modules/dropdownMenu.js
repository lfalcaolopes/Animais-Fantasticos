export default function initDropdownMenu() {
  const dropdownMenu = document.querySelector("[data-dropdown]");
  const dropdownButton = document.querySelector("#dropdownButton");
  const html = document.documentElement;

  function outsideClick(event) {
    // Check if element clicked was outside the menu or the menu button
    if (
      !dropdownMenu.contains(event.target) ||
      dropdownButton === event.target
    ) {
      dropdownMenu.classList.remove("ativo");

      html.removeEventListener("click", outsideClick);
    }
  }

  function handleCLick(event) {
    event.preventDefault();
    // Prevents event bubble
    event.stopPropagation();

    dropdownMenu.classList.toggle("ativo");

    html.addEventListener("click", outsideClick);
  }

  dropdownButton.addEventListener("click", handleCLick);
}
