export const handleOpenFiltersButton = () => {
  let selectsSection = document.querySelector("#selects-section");
  const filters = document.querySelector("#filters");
  let chevronIcon = filters.querySelector(".chevron-icon");
  selectsSection.classList.toggle("selects-section-shown");
  chevronIcon.classList.toggle("chevron-rotation");

  let allSelectOptionsDivShown = document.querySelectorAll(
    ".select-options-div-shown"
  );
  allSelectOptionsDivShown.forEach((element) => {
    element.classList.remove("select-options-div-shown");
  });
};