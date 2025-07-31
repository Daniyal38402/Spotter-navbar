 function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }

    function toggleDropdown(e) {
      e.stopPropagation();
      const parent = e.target.closest(".nav-item");
      const allItems = document.querySelectorAll(".dropdown-parent");

      allItems.forEach(item => {
        if (item !== parent) item.classList.remove("open");
      });

      parent.classList.toggle("open");
    }

    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-parent").forEach(item => {
        item.classList.remove("open");
      });
    });