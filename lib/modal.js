document.addEventListener("DOMContentLoaded", () => {
  const modalBackground = document.getElementsByClassName(
    "modal_background"
  )[0];
  const modal = document.getElementsByClassName("modal")[0];
  const close = document.getElementsByClassName("close")[0];

  modal.addEventListener("click", event => {
    event.stopPropagation();
  });

  [(modalBackground, close)].forEach(el => {
    el.addEventListener("click", () => {
      modalBackground.classList.add("hide");
    });
  });
});
