import React from 'react'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import ScareMe from './components/ScareMe'
import { Provider, useGlobalState } from './store'

function App() {
  const currentPage = useGlobalState('currentPage')

  const PageBySelection = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />
      case 'Scare Me!':
        return <ScareMe />
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
