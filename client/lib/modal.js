document.addEventListener("DOMContentLoaded", () => {
  const modalBackground = document.getElementsByClassName(
    "modal_background"
  )[0];
  const modal = document.getElementsByClassName("modal")[0];
  const close = document.getElementsByClassName("close")[0];
  const checkbox = document.getElementsByClassName("modal_check")[0];
  const help = document.getElementsByClassName("show_modal")[0];

  if (showModal === "show") {
    modalBackground.classList.remove("hide");
  }

  help.addEventListener("click", () => {
    checkbox.setAttribute("checked", true);
    modalBackground.classList.remove("hide");
  });

  modal.addEventListener("click", event => event.stopPropagation());

  checkbox.addEventListener("click", () => {
    if (showModal === "don't") {
      window.localStorage.setItem("show_modal", "show");
    } else {
      window.localStorage.setItem("show_modal", "don't");
    }
  });

  [(modalBackground, close)].forEach(el => {
    el.addEventListener("click", () => {
      modalBackground.classList.add("hide");
    });
  });
});
