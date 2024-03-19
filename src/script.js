// Fungsi Switch Light Dark Theme-------------------------------------------------------------------------------------------------------------
export function toggleDarkMode() {
    let htmlElement = document.querySelector('html');
    let darkModeCheckbox = document.getElementById('darkModeCheckbox');
    
    if (htmlElement && darkModeCheckbox) {
      if (darkModeCheckbox.checked) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    } else {
      console.error("Elements not found");
    }
  }

document.addEventListener('DOMContentLoaded', function() {
  let darkModeCheckbox = document.getElementById('darkModeCheckbox');
  if (darkModeCheckbox) {
    darkModeCheckbox.addEventListener('change', toggleDarkMode);
  }
})

// Menu Navbar versi mobile--------------------------------------------------------------------------------------------------------------------
let navElement = document.getElementById("nav");
if (navElement !== null) {
    navElement.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
let toggleButton = document.getElementById('toggleButton');
let nav = document.getElementById('nav');
if (toggleButton && nav !== null) {
	toggleButton.addEventListener('click', function () {
	if (nav.style.display === 'none' || window.getComputedStyle(nav).display === 'none') {
		nav.style.display = 'block';
	} else {
		nav.style.display = 'none';
	}
	});
} else {
	console.error("Elemen dengan id 'toggleButton' atau 'nav' tidak ditemukan.");
}
});

// Astro meta tags-----------------------------------------------------------------------------------------------------------------------------
export default defineConfig({
  integrations: [astroMetaTags()],
});