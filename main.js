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

  let entryPicture = document.createElement('div')
  entryPicture.classList.add('entry-div', 'entry-picture')
  let imageTag = document.createElement('img')
  imageTag.src = image.urls.regular
  // imageTag.src = './src/assets/img/image.png'
  imageTag.alt = image.alt_description

  let entryText = document.createElement('div')
  entryText.classList.add('entry-div', 'entry-text')
  let h2 = document.createElement('h2')
  h2.innerText = 'id: ' + image.id
  // h2.innerText = 'id: '
  let p = document.createElement('p')
  p.innerText = image.alt_description
  // p.innerText = 'Descripción'

  let randomNumber = getRandomInteger(1, 8)
  // console.log(randomNumber)

  if (randomNumber <= 4) {
    individualEntry.classList.add('big-flex')
  }

  picturesTimeline.append(individualEntry)
  individualEntry.append(entryPicture)
  individualEntry.append(entryText)
  entryPicture.append(imageTag)
  entryText.append(h2)
  entryText.append(p)
}

const resetTl = () => {
  picturesTimeline.innerHTML = ''
}
const resetPageNumber = () => {
  pageNumber = 1
}
let pageNumber = 1
const fetchImages = async (query = 'latest', n = 20, pageNumber) => {
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
fetchImages('latest')

const addTenMorePictures = () => {
  pageNumber++
  if (searchInput.value) {
    fetchImages(searchInput.value, 10, pageNumber)
  } else {
    fetchImages('latest', 10, pageNumber)
  }
}
const showMoreButton = document.querySelector('#show-more-button')
showMoreButton.addEventListener('click', addTenMorePictures)

const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
