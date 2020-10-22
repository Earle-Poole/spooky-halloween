import React from 'react'

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
    !randomRedditPost[0].data.children[0].data.is_gallery
  ) {
    getRandomTechSupportGorePost()
  }
}

const ScareMe = () => {
  getRandomTechSupportGorePost()

  return <></>
}

export default ScareMe
