import React from 'react'
import { PageOptions } from '../constants/Home.constants'
import { useGlobalDispatch } from '../store'
import './css/navigation.css'

const navigationOptions = [
  PageOptions.HOME,
  PageOptions.SCARE_ME,
  PageOptions.STORY_TIME,
  PageOptions.WATCH_LIST,
  PageOptions.DIY_COSTUMES,
  PageOptions.MAP_STUFF,
  PageOptions.SPOOKY_SAYS,
]

const Navigation = () => {
  const dispatch = useGlobalDispatch()

  const onClickHandler = (e: React.MouseEvent, option: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: option })
  }
  return (
    <div className='Navigation'>
      {navigationOptions.map((option) => {
        return (
          <div
            className={'Navigation-Option'}
            key={option}
            onClick={(e) => onClickHandler(e, option)}>
            {option}
          </div>
        )
      })}
    </div>
  )
}

export default Navigation
