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
let pageNumber = 1;
const showMoreButton = document.querySelector("#show-more-button");
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
const openFiltersButton = document.querySelector("#open-filters-button");
const menuButton = document.querySelector("#menu-text");
const menuMobile = document.querySelector("#nav-list-mobile");

import { getRandomInteger } from "./src/components/functions/math_functions/get-random-integer";
import { printFilterCategories } from "./src/components/functions/prints/print-filter-categories";
import { printRandomEmoji } from "./src/components/functions/prints/print-random-emoji";
import { handleShowFiltersOptionsButtons } from "./src/components/functions/handle-functions/handle-show-filters-options-button";
import { resetTl } from "./src/components/functions/resets/reset-timeline";
import { handleOpenFiltersButton } from "./src/components/functions/handle-functions/handle-open-filters-button";
import { imagesNotFound } from "./src/components/functions/notifications/no-images-found";

const handleEnter = (e) => {
  if (e.keyCode === 13) {
    resetTl();
    pageNumber = 1;
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

const fetchImages = async (
  query = "coral color",
  n = 10,
  pageNumber,
  color = "all",
  orientation = "all",
  orderBy = "relevant"
) => {
  fetch(
    `${mainRoute}photos?query=${query}&page=${pageNumber}&per_page=${n}&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      let resultsArray = res.results;
      if (resultsArray.length > 0) {
        resultsArray.forEach((result) => {
          printImage(result);
        });
      } else {
        imagesNotFound();
      }
    })
    .catch((error) => console.log(`Fetch failed, check code`));
};
fetchImages("coral color");

const addTenMorePictures = () => {
  pageNumber++;
  console.log(pageNumber);
  if (searchInput.value) {
    fetchImages(searchInput.value, 10, pageNumber);
  } else {
    fetchImages("coral color", 10, pageNumber);
  }
};

showMoreButton.addEventListener("click", addTenMorePictures);

const filterCategories = ["colors", "orientation", "sort by"];
const selectsSection = document.querySelector("#selects-section");

printFilterCategories("Colors", colors);
printFilterCategories("Orientation", orientation);
printFilterCategories("Sort", sortBy);

openFiltersButton.addEventListener("click", handleOpenFiltersButton);

const categoryFilterButtons = filters.querySelectorAll(".category-filter");
categoryFilterButtons.forEach((button) => {
  button.addEventListener("click", handleShowFiltersOptionsButtons);
});

const selectOptButton = document.querySelectorAll(".select-opt");

const getSelectOptionClicked = () => {
  alert("this feature is still in proccess, sorry D:");
};
selectOptButton.forEach((element) => {
  element.addEventListener("click", getSelectOptionClicked);
});

const showMenuMobile = () => {
  menuMobile.classList.toggle("nav-list-mobile-shown");
};
menuButton.addEventListener("click", showMenuMobile);
