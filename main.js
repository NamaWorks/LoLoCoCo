import "./styles.css";
import "./src/components/styles/nav/nav.css";
import "./src/components/styles/body-main/body-main.css";
import "./src/components/styles/body-main/show-more-button.css";
import "./src/components/styles/footer/footer.css";
import "./src/components/styles/body-main/filters.css";

const mainRoute = "https://api.unsplash.com/search/";
const applicationId = "534651";
const secretKey = "HLajwDcwMz81sQQf8U_VQtNs3hfZHGaAWmQCmtCynsg";
const accessKey = "n7epUiJjY2BrSI7FW1oJ33wh7q4XI7lsZZlxCBwRg3o";

const searchInput = document.querySelector("#search-input");
const picturesTimeline = document.querySelector("#pictures-timeline");

import { getRandomInteger } from "./src/components/functions/math_functions/get-random-integer";
import { printRandomEmoji } from "./src/components/functions/print-random-emoji/print-random-emoji";

const handleEnter = (e) => {
  if (e.keyCode === 13) {
    resetTl();
    resetPageNumber();
    if (e.target.value) {
      fetchImages(e.target.value);
    } else {
      fetchImages("coral color");
    }
  }
};
searchInput.addEventListener("keyup", handleEnter);

const printImage = (image) => {
  const picturesTimeline = document.querySelector("#pictures-timeline");

  let individualEntry = document.createElement("div");
  individualEntry.className = "individual-entry";

  let entryPicture = document.createElement("div");
  entryPicture.classList.add("entry-div", "entry-picture");
  let imageTag = document.createElement("img");
  imageTag.src = image.urls.regular;
  imageTag.alt = image.alt_description;

  let entryText = document.createElement("div");
  entryText.classList.add("entry-div", "entry-text");
  let userImageDiv = document.createElement("div");
  userImageDiv.classList.add("user-image-div");
  let userImage = document.createElement("img");
  userImage.src = image.user.profile_image.medium;
  userImage.classList.add("user-image");
  // userImage.href = image.user.social.portfolio_url
  let pUser = document.createElement("a");
  pUser.innerText = image.user.name;
  pUser.href = image.user.social.portfolio_url;
  pUser.target = "_blank";
  // let p = document.createElement('p')
  // p.innerText = image.alt_description

  let randomNumber = getRandomInteger(1, 8);
  if (randomNumber <= 4) {
    individualEntry.classList.add("big-flex");
  }

  picturesTimeline.append(individualEntry);
  individualEntry.append(entryPicture);
  individualEntry.append(entryText);
  entryPicture.append(imageTag);
  entryText.append(userImageDiv);
  userImageDiv.append(userImage);
  entryText.append(pUser);
  // entryText.append(p)
};

const resetTl = () => {
  picturesTimeline.innerHTML = "";
};
const resetPageNumber = () => {
  pageNumber = 1;
};
let pageNumber = 1;
const fetchImages = async (
  query = "coral color",
  color = "all",
  orientation = "all",
  orderBy = "relevant",
  n = 10,
  pageNumber
) => {
  let queryInput = `query = '${query}'`;
  console.log(queryInput);
  let colorInput = `color = '${color}'`;
  console.log(colorInput);
  let orientationInput = `orientation = '${orientation}'`;
  console.log(orientationInput);
  let orderByInput = `orderBy = '${orderBy}'`;
  console.log(orderByInput);
  fetch(
    `${mainRoute}photos?query=${query}&page=${pageNumber}&per_page=${n}&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      let resultsArray = res.results;
      resultsArray.forEach((result) => {
        // console.log(result)
        printImage(result);
      });
      // funciones de recursividad -> recursive function
    })
    .catch((error) => console.log(`Fetch failed, check code`));
};
fetchImages("coral color");

const addTenMorePictures = () => {
  pageNumber++;
  if (searchInput.value) {
    fetchImages(searchInput.value, 10, pageNumber);
  } else {
    fetchImages("coral color", 10, pageNumber);
  }
};
const showMoreButton = document.querySelector("#show-more-button");
showMoreButton.addEventListener("click", addTenMorePictures);

const filterCategories = ["colors", "orientation", "sort by"];
const selectsSection = document.querySelector("#selects-section");
const colors = [
  "all",
  "black_and_white",
  "black",
  "white",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
];
const orientation = ["all", "landscape", "portrait", "squarish"];
const sortBy = ["relevant", "latest"];
const printFilterCategories = (category, catOptions) => {
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
  chevronIcon.src = "./src/assets/img/chevron.svg";
  chevronIcon.alt = "Chevron";
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

printFilterCategories("Colors", colors);
printFilterCategories("Orientation", orientation);
printFilterCategories("Sort", sortBy);

const handleOpenFiltersButton = () => {
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
const openFiltersButton = document.querySelector("#open-filters-button");
openFiltersButton.addEventListener("click", handleOpenFiltersButton);

const handleShowFiltersOptionsButtons = () => {
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

const cleanClassFiltersOptionsButtons = () => {
  let button = event.target;
  let chevron = button.querySelector(".chevron-icon");

  let allSelectOptionsDivShown = document.querySelectorAll(
    ".select-options-div-shown"
  );

  allSelectOptionsDivShown.forEach((element) => {
    element.classList.remove("select-options-div-shown");
    chevron.classList.remove("chevron-rotation");
  });
};

const categoryFilterButtons = filters.querySelectorAll(".category-filter");
categoryFilterButtons.forEach((button) => {
  button.addEventListener("click", handleShowFiltersOptionsButtons);
});
