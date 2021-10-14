import { useRef } from 'react'
import Draggable from 'react-draggable'
import './css/mapStuff.css'

interface UIProps {
  map: google.maps.Map | null
}
const UI = (props: UIProps) => {
  let infowindow: google.maps.InfoWindow | undefined
  const mapUIRef = useRef<HTMLDivElement>(null!)
  const windowRef = useRef<HTMLDivElement>(null!)
  const performNearbySearch = () => {
    if (props.map) {
      const service = new google.maps.places.PlacesService(props.map)
      infowindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(0, -25),
        zIndex: -1,
      })
      const mapCenter = props.map.getCenter()
      if (!mapCenter) {
        return
      }
      const hauntedHousesIsChecked = (
        document.getElementById('haunted-houses') as HTMLInputElement
      ).checked
      const pumpkinPatchesIsChecked = (
        document.getElementById('pumpkin-patches') as HTMLInputElement
      ).checked

      if (hauntedHousesIsChecked) {
        service.nearbySearch(
          {
            location: mapCenter,
            radius: 30000,
            keyword: 'Haunted House',
          },
          (res, status) => {
            console.log('res: ', res)
            if (status === google.maps.places.PlacesServiceStatus.OK && res) {
              for (var i = 0; i < res.length; i++) {
                createMarker(res[i])
              }
              props.map?.setCenter(res[0]?.geometry?.location!)
            }
          }
        )
      }
      if (pumpkinPatchesIsChecked) {
        service.nearbySearch(
          {
            location: mapCenter,
            radius: 30000,
            keyword: 'Pumpkin Patch',
          },
          (res, status) => {
            console.log('res: ', res)
            if (status === google.maps.places.PlacesServiceStatus.OK && res) {
              for (var i = 0; i < res.length; i++) {
                createMarker(res[i])
              }
              props.map?.setCenter(res[0]?.geometry?.location!)
            }
          }
        )
      }
    }
  }
  function createMarker(place: google.maps.places.PlaceResult) {
    if (!place.geometry || !place.geometry.location) return

    const marker = new google.maps.Marker({
      map: props.map,
      position: place.geometry.location,
    })

    google.maps.event.addListener(marker, 'click', () => {
      console.log('click!', place)
      console.log('infowindow: ', infowindow)
      infowindow?.setContent(place.name || '')
      infowindow?.open(props.map)
      const markerCoords = marker.getPosition()
      infowindow?.setPosition(markerCoords)
    })
  }
  return (
    <div id='mapUI' ref={mapUIRef} className='MapStuff-uiWrapper'>
      {props.map && (
        <Draggable nodeRef={windowRef} handle='.UI-Window' bounds={'#mapUI'}>
          <div ref={windowRef} className='UI-Window'>
            <div className='UI-Check-Box-Wrapper'>
              <div>
                <input
                  id='haunted-houses'
                  type='checkbox'
                  name='haunted-houses'></input>
                <label htmlFor='haunted-houses'>Haunted Houses</label>
              </div>
              <div>
                <input
                  id='pumpkin-patches'
                  type='checkbox'
                  name='pumpkin-patches'></input>
                <label htmlFor='pumpkin-patches'>Pumpkin Patches</label>
              </div>
              <button type='button' onClick={performNearbySearch}>
                Search!
              </button>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  )
}

export default UI
