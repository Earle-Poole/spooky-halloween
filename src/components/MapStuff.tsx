import { useCallback, useEffect, useRef, useState } from 'react'
import './css/mapStuff.css'
import {
  BASE_URL,
  KEY_PATH,
  LIBRARIES_PATH,
  mapOptions,
  restrictionBounds,
} from '../constants/MapStuff.constants'
import UI from './MapStuff.UI'

const MapStuff = () => {
  console.log(
    'process.env.REACT_APP_gMapAPIKey: ',
    process.env.REACT_APP_gMapAPIKey
  )
  const [storedMap, setStoredMap] = useState<google.maps.Map | null>(null)

  const mapRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if ('geolocation' in navigator && storedMap) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
        storedMap.setCenter(userLatLng)
        storedMap.setZoom(9)
      })
    }
  }, [storedMap])

  const initMap = useCallback(() => {
    setStoredMap(
      new window.google.maps.Map(mapRef.current, {
        ...mapOptions,
        restriction: restrictionBounds,
      })
    )
  }, [])

  const googleMapScript: HTMLScriptElement = document.createElement('script')
  googleMapScript.id = 'googleMapsScriptTag'

  useEffect(() => {
    if (!document.getElementById('googleMapsScriptTag')) {
      googleMapScript.src = `${BASE_URL}${KEY_PATH}${LIBRARIES_PATH}`

      document.querySelector('.Body')?.appendChild(googleMapScript)

      googleMapScript.addEventListener('load', initMap)
    }
  }, [googleMapScript, initMap])

  useEffect(
    () => () => {
      document.getElementById('googleMapsScriptTag')?.remove()
    },
    []
  )

  if (!process.env.REACT_APP_gMapAPIKey) {
    return (
      <div className='MapStuff'>
        A Google Map API key was no provided. Please add one to the environment
        variable file under "REACT_APP_gMapAPIKey"
      </div>
    )
  }

  return (
    <div className='MapStuff'>
      <div id='map' ref={mapRef} className='MapStuff-mapWrapper'></div>
      <UI map={storedMap} />
    </div>
  )
}

export default MapStuff
