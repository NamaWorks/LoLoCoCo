import './styles.css'
import './src/components/nav/nav.css'
import './src/components/body-main/body-main.css'
import './src/components/body-main/show-more-button.css'
import './src/components/footer/footer.css'

const mainRoute = 'https://api.unsplash.com/'
const applicationId = '534651'
const secretKey = 'HLajwDcwMz81sQQf8U_VQtNs3hfZHGaAWmQCmtCynsg'
const accessKey = 'n7epUiJjY2BrSI7FW1oJ33wh7q4XI7lsZZlxCBwRg3o'

const printImage = (image) => {
  const picturesTimeline = document.querySelector('#pictures-timeline')

  let individualEntry = document.createElement('div')
  individualEntry.className = 'individual-entry'

  let entryPicture = document.createElementNS('div')
  entryPicture.classList.add('entry-div', 'entryPicture')
  let imageTag = document.createElement('img')
  imageTag.src = ''
  imageTag.alt = ''

  let entryText = document.createElement('div')
  entryText.classList.add('entry-div', 'entry-text')
  let h2 = document.createElement('h2')
  h2.innerText = ''
  let p = document.createElement('p')
  p.innerText = ''

  picturesTimeline.append(individualEntry)
  individualEntry.append(entryPicture)
  individualEntry.append(entryText)
  entryPicture.append(imageTag)
  entryText.append(h2)
  entryText.append(p)
}

const fetchImages = (query, n = 25) => {
  fetch(
    `${mainRoute}photos?query=${query}&per_page=${n}&client_id=${accessKey}`
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(`Fetch failed, check error code`))
}

const fetchImagesAsyncAwait = async (query, n = 25) => {
  try {
    const response = fetch(
      `${mainRoute}photos?query=${query}&per_page=${n}&client_id=${accessKey}`
    )
    const res = response.json()
  } catch (error) {
    console.log(`Fetch failed, check error code`)
  } finally {
    console.log(`This function has finished`)
  }
}
