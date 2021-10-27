import React from 'react'
import { useGlobalDispatch } from '../store'
import './css/navigation.css'

const navigationOptions = ['Home', 'Scare Me!', `Let's Make A Story`, 'Watch List', 'DIY Costumes', 'Map Stuff']

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
