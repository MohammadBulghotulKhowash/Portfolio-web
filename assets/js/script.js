document.addEventListener("DOMContentLoaded", () => {
  const dropLink = document.querySelector(".drop-link");
  const dropItem = document.querySelector(".drop-item");
  const arrow = document.querySelector(".arrow");
  const arrowUpPath =
    "assets/svg/arrow_drop_up_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
  const arrowDownPath =
    "assets/svg/arrow_drop_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
  let toogle = false;

  dropLink.addEventListener("click", () => {
    dropItem.classList.toggle("hide");
    toogle ? (arrow.src = arrowDownPath) : (arrow.src = arrowUpPath);
    toogle = !toogle;
  });
});
