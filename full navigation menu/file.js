let menubar = document.querySelector(".menubar"),
  closeBtn = document.querySelector(".close");

menubar.onclick = function () {
  menubar.nextElementSibling.classList.add("open");
};

closeBtn.onclick = function () {
  closeBtn.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  console.log(e);
  if (e.key === "Escape") closeBtn.parentElement.classList.remove("open");
};
