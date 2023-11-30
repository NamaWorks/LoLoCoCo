import './styles.css'
import './src/components/styles/nav/nav.css'
import './src/components/styles/body-main/body-main.css'
import './src/components/styles/body-main/show-more-button.css'
import './src/components/styles/footer/footer.css'

const mainRoute = 'https://api.unsplash.com/'
const applicationId = '534651'
const secretKey = 'HLajwDcwMz81sQQf8U_VQtNs3hfZHGaAWmQCmtCynsg'
const accessKey = 'n7epUiJjY2BrSI7FW1oJ33wh7q4XI7lsZZlxCBwRg3o'

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

  picturesTimeline.append(individualEntry)
  individualEntry.append(entryPicture)
  individualEntry.append(entryText)
  entryPicture.append(imageTag)
  entryText.append(h2)
  entryText.append(p)
}

const resetPicturesTl = () => {
  const picturesTimeline = document.querySelector('#pictures-timeline')
  picturesTimeline.innerHTML = ''
}

const fetchImages = (query, n = 10) => {
  resetPicturesTl()
  console.log(query)
  fetch(
    `${mainRoute}photos?query=${query}&per_page=${n}&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      res.forEach((img) => {
        console.log(img)
        printImage(img)
      })
    })
    .catch((error) => console.log(`Fetch failed, check code`))
}
fetchImages('')

const getImagesBytag = (n = 10) => {
  let searchInput = document.querySelector('#search-input')
  let searchInputValue = searchInput.value
  searchInput.addEventListener('blur', (e) => fetchImages(e, n))
}
getImagesBytag()

// const fetchImagesAsyncAwait = async (query, n = 10) => {
//   try {
//     const response = fetch(
//       `${mainRoute}photos?query=${query}&per_page=${n}&client_id=${accessKey}`
//     )
//     const res = response.json()
//   } catch (error) {
//     console.log(`Fetch failed, check error code`)
//   } finally {
//     console.log(`This function has finished`)
//   }
// }
