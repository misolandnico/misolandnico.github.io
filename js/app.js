document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");

  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
  });

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });
});
