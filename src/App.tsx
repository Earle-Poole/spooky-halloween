import './App.css'
import Home from './components/Home'
import MapStuff from './components/MapStuff'
import Navigation from './components/Navigation'
import ScareMe from './components/ScareMe'
import StoryTime from './components/StoryTime'
import WatchList from './components/WatchList'
import { Provider, useGlobalState } from './store'
import DIYCostumes from './components/DIYCostumes'
import { PageOptions } from './constants/Home.constants'
import SpookySays from './components/SpookySays'

function App() {
  const currentPage = useGlobalState('currentPage')
  const PageBySelection = () => {
    switch (currentPage) {
      case PageOptions.HOME:
        return <Home />
      case PageOptions.SCARE_ME:
        return <ScareMe />
      case PageOptions.STORY_TIME:
        return <StoryTime />
      case PageOptions.WATCH_LIST:
        return <WatchList />
      case PageOptions.DIY_COSTUMES:
        return <DIYCostumes />
      case PageOptions.MAP_STUFF:
        return <MapStuff />
      case PageOptions.SPOOKY_SAYS:
        return <SpookySays />
      default:
        return null
    }
  }

  return (
    <div className='App gap-4'>
      <div className='text-orange-500 text-shadow-outline text-7xl leading-normal'>
        Happy Halloween!
      </div>
      <div>
        <Navigation />
      </div>
      <PageBySelection />
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
