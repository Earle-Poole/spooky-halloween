import React, { useEffect } from 'react'
import './css/scareMe.css'

const techSupportGoreURL =
  'https://www.reddit.com/r/techsupportgore/random.json'

const getRandom = async (url: string) => {
  const response = await fetch(url)

  return response.json()
}

const getRandomTechSupportGorePost = async () => {
  const randomRedditPost = await getRandom(techSupportGoreURL)
  console.log('randomRedditPost: ', randomRedditPost)

  console.log(
    'randomRedditPost?.[0]?.children?.[0]: ',
    !!randomRedditPost?.[0]?.data?.children?.[0]
  )

  if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    (!randomRedditPost[0].data.children[0].data.gallery_data ||
      !randomRedditPost[0].data.children[0].data.gallery_data.items[0].media_id)
  ) {
    getRandomTechSupportGorePost()
  } else {
    const postData = randomRedditPost[0].data.children[0].data
    const mediaID = postData.gallery_data.items[0].media_id

    const img = document.createElement('img')
    const span = document.createElement('span')

    span.innerHTML = 'Click the image to get another random spook!'
    img.setAttribute(
      'src',
      postData.media_metadata[mediaID].s.u.split('amp;').join('')
    )
    img.onclick = () => {
      getRandomTechSupportGorePost()
    }
    const scareMe = document.querySelector('.Scare-Me')

    if (scareMe) {
      scareMe.innerHTML = ''
      scareMe.appendChild(img)
      scareMe.appendChild(span)
    }
  }
}

const ScareMe = () => {
  useEffect(() => {
    getRandomTechSupportGorePost()
  }, [])

  return <div className='Scare-Me'></div>
}

export default ScareMe
