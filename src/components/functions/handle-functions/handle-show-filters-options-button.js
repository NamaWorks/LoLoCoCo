export const handleShowFiltersOptionsButtons = () => {
  // cleanClassFiltersOptionsButtons()
  let button = event.target;
  let chevron = button.querySelector(".chevron-icon");
  let filterSelect = event.target.parentElement;
  let selectFilterContainer = filterSelect.parentElement;
  let selectOptionsDiv = selectFilterContainer.querySelector(
    ".select-options-div"
  );

  if (!selectOptionsDiv.classList.contains("select-options-div-shown")) {
    chevron.classList.add("chevron-rotation");
    selectOptionsDiv.classList.add("select-options-div-shown");
  } else if (selectOptionsDiv.classList.contains("select-options-div-shown")) {
    chevron.classList.remove("chevron-rotation");
    selectOptionsDiv.classList.remove("select-options-div-shown");
    // we could use a classList.toggle() in this situation, but for testing reasons we'll use add and remove
  }
};