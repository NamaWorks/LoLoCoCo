export const printFilterCategories = (category, catOptions) => {
  let selectsSection = document.querySelector("#selects-section");

  let selectFilterContainer = document.createElement("div");
  selectFilterContainer.classList.add("select-filter-container");
  selectsSection.append(selectFilterContainer);

  let filterSelect = document.createElement("div");
  filterSelect.classList.add("filter-select");
  filterSelect.setAttribute = ("id", `${category}-select`);
  selectFilterContainer.append(filterSelect);

  let categoryFilter = document.createElement("button");
  categoryFilter.classList.add("category-filter");
  categoryFilter.innerText = category;
  filterSelect.append(categoryFilter);

  let chevronIcon = document.createElement("img");
  chevronIcon.src = "https://res.cloudinary.com/dgrhbsilh/image/upload/v1702339831/LoLoCoCo%C2%AE/chevron_loohvt.svg";
  chevronIcon.alt = ">";
  chevronIcon.classList.add("chevron-icon");
  categoryFilter.append(chevronIcon);

  let selectOptionsDiv = document.createElement("div");
  selectOptionsDiv.classList.add("select-options-div");
  selectFilterContainer.append(selectOptionsDiv);

  catOptions.forEach((option) => {
    let selectOpt = document.createElement("div");
    selectOpt.classList.add("select-opt");
    selectOptionsDiv.append(selectOpt);

    let selectOptButton = document.createElement("button");
    selectOptButton.classList.add("select-opt-button");
    selectOptButton.innerText = option;
    selectOpt.append(selectOptButton);
  });
};