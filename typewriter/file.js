let button = document.querySelector("button.evaluate"),
  input = button.previousElementSibling,
  p = button.parentElement.nextElementSibling;

button.addEventListener("click", function () {
  let i = 0;

  if (input.value !== "") {
    p.textContent = "";

    let c = setInterval(() => {
      if (i >= input.value.length) clearInterval(c);
      else {
        p.textContent += input.value[i];
        i++;
      }
    }, 200);
  } else p.textContent = "Please, enter any text first!";
});

window.onload = function () {};
