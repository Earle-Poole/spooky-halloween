import React from 'react'
import './App.css'
import Home from './components/Home'
import MapStuff from './components/MapStuff'
import Navigation from './components/Navigation'
import ScareMe from './components/ScareMe'
import StoryTime from './components/StoryTime'
import WatchList from './components/WatchList'
import { Provider, useGlobalState } from './store'

function App() {
  const currentPage = useGlobalState('currentPage')

  const PageBySelection = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />
      case 'Scare Me!':
        return <ScareMe />
      case `Let's Make A Story`:
        return <StoryTime />
      case 'Watch List':
        return <WatchList />
      case 'Map Stuff':
        return <MapStuff />
      default:
        return null
    }
  }

  return (
    <div className='App'>
      <div className='App-Title'>Happy Halloween!</div>
      <div className='App-Navigation'>
        <Navigation />
      </div>
      <div className='App-Body'>
        <PageBySelection />
      </div>
    </div>
  )
}

const AppWrappedInProvider = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}

export default AppWrappedInProvider
