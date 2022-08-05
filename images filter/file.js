let lis = document.querySelectorAll("ul.switcher li"),
  imgs = Array.from(document.images);

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");

    imgs.forEach((img) => {
      if (img.classList.contains(li.dataset.cat)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

