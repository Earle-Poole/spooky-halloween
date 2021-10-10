export const restrictionBounds = {
  latLngBounds: {
    north: 85,
    south: -85,
    east: 180,
    west: -180,
  },
  strictBounds: true,
}
export const basemap = [
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

export const mapOptions = {
  center: { lat: 44.967243, lng: -103.771556 },
  zoom: 5,
  disableDefaultUI: true,
  styles: basemap,
}

export const BASE_URL = 'https://maps.googleapis.com/maps/api/js?'
export const KEY_PATH = `key=${process.env.REACT_APP_gMapAPIKey}`
export const LIBRARIES_PATH = '&libraries=places,geometry'