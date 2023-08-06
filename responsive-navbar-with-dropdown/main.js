const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
	dropdownBtn.forEach((btn) => {
		btn.setAttribute("aria-expanded", "false");
	});
}

function closeDropdownMenu() {
	dropdown.forEach((drop) => {
		drop.classList.remove("active");
		drop.addEventListener("click", (e) => e.stopPropagation());
	});
}

function toggleHamburger() {
	navMenu.classList.toggle("show");
	hamburgerBtn.setAttribute("aria-expanded", hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false");
}

// Get the id of the Dropdown menu clicked
// The forEach method loops through the collection of buttons
dropdownBtn.forEach((btn) => {
	// The addEventListener() method attaches a click event to each button
	btn.addEventListener("click", function (e) {
		// The currentTarget.dataset property fetches the current dropdown of the button clicked.
		const dropdownIndex = e.currentTarget.dataset.dropdown;
		// Each of the ids are used to target the corresponding dropdown element
		const dropdownElement = document.getElementById(dropdownIndex);
		console.log(dropdownElement);

		// Toggle the dropdown menu
		dropdownElement.classList.toggle("active");
		dropdown.forEach((drop) => {
			if (drop.id !== btn.dataset["dropdown"]) {
				drop.classList.remove("active");
			}
		});
		e.stopPropagation();
		btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") === "false" ? "true" : "false");
	});
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) => {
	link.addEventListener("click", () => {
		closeDropdownMenu();
		setAriaExpandedFalse();
	});
});

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
	closeDropdownMenu();
	setAriaExpandedFalse();
});

// close dropdown when the scape key is pressed
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeDropdownMenu();
		setAriaExpandedFalse();
	}
});

// Toggle Hamburger Menu
links.forEach((link) => {
	link.addEventListener("click", () => {
		closeDropdownMenu();
		setAriaExpandedFalse();
		toggleHamburger();
	});
});

hamburgerBtn.addEventListener("click", toggleHamburger);
