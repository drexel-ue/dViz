document.addEventListener("DOMContentLoaded", () => {
  const modalBackground = document.getElementsByClassName(
    "modal_background"
  )[0];
  const modal = document.getElementsByClassName("modal")[0];
  const close = document.getElementsByClassName("close")[0];
  const checkbox = document.getElementsByClassName("modal_check")[0];

  if (showModal === true) {
    modalBackground.classList.remove("hide");
  }

  modal.addEventListener("click", event => {
    event.stopPropagation();
  });

  checkbox.addEventListener("click", () => {
    localStorage.setItem("show_modal", !showModal);
  });

  [(modalBackground, close)].forEach(el => {
    el.addEventListener("click", () => {
      modalBackground.classList.add("hide");
    });
  });
});
