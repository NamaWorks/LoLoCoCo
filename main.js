import './styles.css'
import './src/components/styles/nav/nav.css'
import './src/components/styles/body-main/body-main.css'
import './src/components/styles/body-main/show-more-button.css'
import './src/components/styles/footer/footer.css'

const mainRoute = 'https://api.unsplash.com/search/'
const applicationId = '534651'
const secretKey = 'HLajwDcwMz81sQQf8U_VQtNs3hfZHGaAWmQCmtCynsg'
const accessKey = 'n7epUiJjY2BrSI7FW1oJ33wh7q4XI7lsZZlxCBwRg3o'

const searchInput = document.querySelector('#search-input')
const picturesTimeline = document.querySelector('#pictures-timeline')

const handleEnter = (e) => {
  if (e.keyCode === 13) {
    resetTl()
    resetPageNumber()
    if (e.target.value) {
      fetchImages(e.target.value)
    } else {
      fetchImages('latest')
    }
  }
}
searchInput.addEventListener('keyup', handleEnter)

const printImage = (image) => {
  const picturesTimeline = document.querySelector('#pictures-timeline')

  let individualEntry = document.createElement('div')
  individualEntry.className = 'individual-entry'

  let entryMask = document.createElement('div')
  entryMask.classList.add('entry-mask')
  let entryPicture = document.createElement('div')
  entryPicture.classList.add('entry-div', 'entry-picture')
  let imageTag = document.createElement('img')
  imageTag.src = image.urls.regular
  imageTag.alt = image.alt_description

  let entryText = document.createElement('div')
  entryText.classList.add('entry-div', 'entry-text')
  let userImageDiv = document.createElement('div')
  userImageDiv.classList.add('user-image-div')
  let userImage = document.createElement('img')
  userImage.src = image.user.profile_image.medium
  userImage.classList.add('user-image')
  // userImage.href = image.user.social.portfolio_url
  let pUser = document.createElement('p')
  pUser.innerText = image.user.name
  // let p = document.createElement('p')
  // p.innerText = image.alt_description

  let randomNumber = getRandomInteger(1, 8)
  if (randomNumber <= 4) {
    individualEntry.classList.add('big-flex')
  }

  picturesTimeline.append(individualEntry)
  individualEntry.append(entryPicture)
  individualEntry.append(entryMask)
  individualEntry.append(entryText)
  entryPicture.append(imageTag)
  entryText.append(userImageDiv)
  userImageDiv.append(userImage)
  entryText.append(pUser)
  // entryText.append(p)
}

const resetTl = () => {
  picturesTimeline.innerHTML = ''
}
const resetPageNumber = () => {
  pageNumber = 1
}
let pageNumber = 1
const fetchImages = async (query = 'pattern', n = 10, pageNumber) => {
  console.log(query)
  fetch(
    `${mainRoute}photos?query=${query}&page=${pageNumber}&per_page=${n}&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      let resultsArray = res.results
      resultsArray.forEach((result) => {
        // console.log(result)
        printImage(result)
      })
      // funciones de recursividad -> recursive function
    })
    .catch((error) => console.log(`Fetch failed, check code`))
}
fetchImages('pattern')

const addTenMorePictures = () => {
  pageNumber++
  if (searchInput.value) {
    fetchImages(searchInput.value, 10, pageNumber)
  } else {
    fetchImages('pattern', 10, pageNumber)
  }
}
const showMoreButton = document.querySelector('#show-more-button')
showMoreButton.addEventListener('click', addTenMorePictures)

const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
