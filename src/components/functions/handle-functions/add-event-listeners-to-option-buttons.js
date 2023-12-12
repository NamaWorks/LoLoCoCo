export const addEventListenersToOptButtons = () => {
  selectOptButton.forEach(element => {
  element.addEventListener('click', getSelectOptionClicked)
})
};