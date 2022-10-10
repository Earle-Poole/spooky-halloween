import { useEffect } from 'react'

const techSupportGoreURL =
  'https://www.reddit.com/r/techsupportgore/random.json'

const getRandom = async (url: string) => {
  const response = await fetch(url)

  return response.json()
}

const clearAndSetReceivedImage = (url: string) => {
  const img = document.createElement('img')
  const span = document.createElement('span')

  span.innerHTML = '(Click the image to get another random spook!)'
  span.classList.add(
    'italic',
    'text-orange-500',
    'text-shadow-outline',
    'text-md'
  )
  img.setAttribute('src', url)
  img.onclick = () => {
    getRandomTechSupportGorePost()
  }
  img.classList.add('max-w-2xl', 'cursor-pointer', 'p-5')
  const scareMe = document.getElementById('scare-me')

  if (scareMe) {
    scareMe.innerHTML = ''
    scareMe.appendChild(img)
    scareMe.appendChild(span)
  }
}

const getRandomTechSupportGorePost = async () => {
  const randomRedditPost = await getRandom(techSupportGoreURL)
  const postData = randomRedditPost?.[0]?.data?.children?.[0]?.data
  const mediaID = postData?.gallery_data?.items?.[0]?.media_id

  if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    postData.post_hint === 'image'
  ) {
    clearAndSetReceivedImage(postData.url)
  } else if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    (!postData.gallery_data || !postData.gallery_data.items[0].media_id)
  ) {
    getRandomTechSupportGorePost()
  } else {
    clearAndSetReceivedImage(
      postData.media_metadata[mediaID].s.u.split('amp;').join('')
    )
  }
}

const ScareMe = () => {
  useEffect(() => {
    getRandomTechSupportGorePost()
  }, [])

  return (
    <div
      id='scare-me'
      className='flex flex-col items-center [overflow:overlay]'></div>
  )
}

export default ScareMe
