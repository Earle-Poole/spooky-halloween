import { useRef } from 'react';
import Draggable from 'react-draggable';
import './css/mapStuff.css';

const infoWindowContents = (
  place: google.maps.places.PlaceResult,
  type: 'pumpkin-patch' | 'haunted-house'
) => {
  return `<div>
        <strong>
            ${type
              .split('-')
              .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
              .join(' ')}
        </strong>
        <div>
            ${place.name}
        </div>
        <div>
            ${place.vicinity}
        </div>
        <div>
            ${place.rating} out of ${place.user_ratings_total} ratings
        </div>
        <div>
            <a target="_blank" href="https://www.google.com/maps/place/${place.name
              ?.split(' ')
              .join('+')}/">Open in Google Maps</a>
        </div>
    </div>`;
};

interface UIProps {
  map: google.maps.Map | null;
}
const UI = (props: UIProps) => {
  let infowindow: google.maps.InfoWindow | undefined;
  const mapUIRef = useRef<HTMLDivElement>(null!);
  const windowRef = useRef<HTMLDivElement>(null!);
  const allMarkersRef = useRef<google.maps.Marker[]>([]);
  const performNearbySearch = () => {
    if (allMarkersRef.current.length > 0) {
      for (let marker of allMarkersRef.current) {
        marker.setMap(null);
      }
      allMarkersRef.current = [];
    }
    if (props.map) {
      const service = new google.maps.places.PlacesService(props.map);
      infowindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(0, -25),
        zIndex: -1,
      });
      const mapCenter = props.map.getCenter();
      if (!mapCenter) {
        return;
      }
      const hauntedHousesIsChecked = (document.getElementById('haunted-houses') as HTMLInputElement)
        .checked;
      const pumpkinPatchesIsChecked = (
        document.getElementById('pumpkin-patches') as HTMLInputElement
      ).checked;

      if (hauntedHousesIsChecked) {
        service.nearbySearch(
          {
            location: mapCenter,
            radius: 30000,
            keyword: 'Haunted House',
          },
          (res, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && res) {
              for (var i = 0; i < res.length; i++) {
                createMarker(res[i], 'haunted-house');
              }
              props.map?.setCenter(res[0]?.geometry?.location!);
            }
          }
        );
      }
      if (pumpkinPatchesIsChecked) {
        service.nearbySearch(
          {
            location: mapCenter,
            radius: 30000,
            keyword: 'Pumpkin Patch',
          },
          (res, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && res) {
              for (var i = 0; i < res.length; i++) {
                createMarker(res[i], 'pumpkin-patch');
              }
              props.map?.setCenter(res[0]?.geometry?.location!);
            }
          }
        );
      }
    }
  };
  function createMarker(
    place: google.maps.places.PlaceResult,
    type: 'pumpkin-patch' | 'haunted-house'
  ) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map: props.map,
      position: place.geometry.location,
    });

    allMarkersRef.current.push(marker);
    google.maps.event.addListener(marker, 'click', () => {
      infowindow?.setContent(infoWindowContents(place, type) || '');
      infowindow?.open(props.map);
      const markerCoords = marker.getPosition();
      infowindow?.setPosition(markerCoords);
    });
  }
  return (
    <div id='mapUI' ref={mapUIRef} className='MapStuff-uiWrapper'>
      {props.map && (
        <Draggable nodeRef={windowRef} handle='.UI-Window' bounds={'#mapUI'}>
          <div ref={windowRef} className='UI-Window'>
            <div className='UI-Check-Box-Wrapper'>
              <div>
                <input id='haunted-houses' type='checkbox' name='haunted-houses'></input>
                <label htmlFor='haunted-houses'>Haunted Houses</label>
              </div>
              <div>
                <input id='pumpkin-patches' type='checkbox' name='pumpkin-patches'></input>
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
  );
};

export default UI;
