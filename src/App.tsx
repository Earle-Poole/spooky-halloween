import './App.css'
import Home from './components/Home'
import MapStuff from './components/MapStuff'
import Navigation from './components/Navigation'
import ScareMe from './components/ScareMe'
import StoryTime from './components/StoryTime'
import WatchList from './components/WatchList'
import { useGlobalState, withGlobalState } from './store'
import DIYCostumes from './components/DIYCostumes'
import { PageOptions } from './constants/Home.constants'
import SpookySays from './components/SpookySays'
import MemoryGame from './components/MemoryGame'

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
      case PageOptions.MEMORY_GAME:
          return <MemoryGame />
      default:
        return null
    }
  }

  return (
    <div className='App gap-4'>
      <div className='text-orange-500 text-shadow-outline text-7xl leading-normal'>
        Happy Halloween!
      </div>
      <Navigation />
      <PageBySelection />
    </div>
  )
}

export default withGlobalState(App)
