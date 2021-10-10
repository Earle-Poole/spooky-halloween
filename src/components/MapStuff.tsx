import React, { useCallback, useEffect, useRef, useState } from 'react'
import './css/mapStuff.css'
const restrictionBounds = {
  latLngBounds: {
    north: 85,
    south: -85,
    east: 180,
    west: -180,
  },
  strictBounds: true,
}
const basemap = [
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        hue: '#FFAD00',
      },
      {
        saturation: 50.2,
      },
      {
        lightness: -34.8,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffefe5',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ecffef',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        hue: '#FFC300',
      },
      {
        saturation: 54.2,
      },
      {
        lightness: -14.4,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5e9ae',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        hue: '#FFAD00',
      },
      {
        saturation: -19.8,
      },
      {
        lightness: -1.8,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'all',
    stylers: [
      {
        hue: '#FFAD00',
      },
      {
        saturation: 72.4,
      },
      {
        lightness: -32.6,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        hue: '#FFAD00',
      },
      {
        saturation: 74.4,
      },
      {
        lightness: -18,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        hue: '#00FFA6',
      },
      {
        saturation: -63.2,
      },
      {
        lightness: 38,
      },
      {
        gamma: 1,
      },
    ],
  },
]

const mapOptions = {
  center: { lat: 44.967243, lng: -103.771556 },
  zoom: 5,
  disableDefaultUI: true,
  styles: basemap,
}

const BASE_URL = 'https://maps.googleapis.com/maps/api/js?'
const KEY_PATH = `key=${process.env.REACT_APP_gMapAPIKey}`
const LIBRARIES_PATH = '&libraries=places,geometry'
const MapStuff = () => {
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

      document.querySelector('.MapStuff')?.appendChild(googleMapScript)

      googleMapScript.addEventListener('load', initMap)
    }
  }, [googleMapScript, initMap, storedMap])

  return (
    <div className='MapStuff'>
      <div id='map' ref={mapRef} className='MapStuff-mapWrapper'></div>
    </div>
  )
}

export default MapStuff
