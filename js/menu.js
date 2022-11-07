(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const pageHeader = document.querySelector(".page-header");
	const mobileMenuRef = document.querySelector("[data-menu]");

	menuBtnRef.addEventListener("click", () => {
	  const expanded =
		menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
	  menuBtnRef.classList.toggle("menu-button--open");
	  pageHeader.classList.toggle("page-header--menu-open");
	  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
	  mobileMenuRef.classList.toggle("mobile-menu--open");
	});
  })();
