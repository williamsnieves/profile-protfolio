document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    const trigger = item.querySelector(".project-trigger");

    trigger.addEventListener("click", () => {
      // Close other open items
      projectItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Update copyright year
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
