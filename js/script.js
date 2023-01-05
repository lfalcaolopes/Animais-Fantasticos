import initTabNav from "./modules/tabNav.js";
import initAccordionNav from "./modules/accordionNav.js";
import smoothTabScroll from "./modules/smoothScroll.js";
import fadingScroll from "./modules/fadingScroll.js";
import initModal from "./modules/modal.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initNumCounter from "./modules/numCounter.js";
import initOperatingHours from "./modules/operatingHours.js";
import initLocalStorage from "./modules/localStorage.js";

//Verification to only add js animations if browser supports it
document.documentElement.className += " js";

//Animal images list to show description
initTabNav();

//Faq accordion list
initAccordionNav();

//Changes tab navigation from fast to smooth
smoothTabScroll();

//Sections fading in animation
fadingScroll();

//Login modal animations
initModal();

//Makes dropdown menu reactive
initDropdownMenu();

//Number Counter animation
initNumCounter();

//Operating Hours visual confirmation
initOperatingHours();

//Store notes on local storage
initLocalStorage();
