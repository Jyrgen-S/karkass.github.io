document.addEventListener("DOMContentLoaded", function () {
  const topNavLinks = document.querySelectorAll(".top-nav .nav-link");
  const sidebarLinks = document.querySelectorAll(".sidebar-nav .nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  let activeTopNav = "";
  let activeSidebarNav = "";

  topNavLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeTopNav = e.target.textContent.trim();
      setActive(topNavLinks, link);
      updateContent();
    });
  });

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeSidebarNav = e.target.textContent.trim();
      setActive(sidebarLinks, link);
      updateContent();
    });
  });

  function setActive(links, activeLink) {
    links.forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  }

  function updateContent() {
    // Hiding all content sections
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Constructing the ID of the relevant content section
    const contentId = `${activeTopNav}-${activeSidebarNav}`;

    // Finding and showing the relevant content section
    const contentSection = document.getElementById(
      contentId.replace(/\s+/g, "-")
    );
    if (contentSection) {
      contentSection.classList.add("active");
    }
  }
});
