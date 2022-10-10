import React from 'react'
import './css/home.css'

const Home = () => {
  return (
    <div
      className='text-3xl text-orange-500 text-shadow-outline flex flex-col
    flex-1 items-center text-center m-5 p-5 '>
      <section>
        Hello, this application is intended to be a fun way to practice your
        React and TypeScript coding while celebrating{' '}
      </section>
      <br />
      <div className='hack animate-shake'>Hacktoberfest 2022!</div>
      <br />
      <span>
        Feel free to fork this repository, make some changes, and submit a pull
        request!
      </span>
      <br />
      <span>Please avoid purposeless pull requests. Thank you</span>
      <a
        className='italic text-orange-500 text-shadow-outline absolute bottom-2 left-2 text-sm'
        href='https://pngtree.com/free-backgrounds'>
        Background image from pngtree.com
      </a>
    </div>
  )
}

export default Home
