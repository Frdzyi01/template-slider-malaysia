let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function updateBackground() {
  const items = document.querySelectorAll(".item");
  const activeItem = items[1]; // The 2nd item is the active one
  const backgroundImage = activeItem.style.backgroundImage;

  // Apply to container
  const container = document.querySelector(".container");
  container.style.backgroundImage = backgroundImage;
  container.style.backgroundSize = "cover";
  container.style.backgroundPosition = "center";
}

// Initial call
updateBackground();

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
  updateBackground();
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
  updateBackground();
});
