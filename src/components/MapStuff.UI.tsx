import { useRef } from 'react';
import Draggable from 'react-draggable';
import './css/mapStuff.css';

interface UIProps {
  map: google.maps.Map | null;
}
const UI = (props: UIProps) => {
  const mapUIRef = useRef<HTMLDivElement>(null!);
  const windowRef = useRef<HTMLDivElement>(null!);
  const performNearbySearch = () => {
    if (props.map) {
      const mapCenter = props.map.getCenter();
      if (!mapCenter) {
        return;
      }
      const pumpkinPatchURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${mapCenter.toUrlValue().split(',').join('%2C')}&radius=30000&keyword=pumpkin%20patch&key=${
        process.env.REACT_APP_gMapAPIKey
      }`;
      const hauntedHouseURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${mapCenter.toUrlValue().split(',').join('%2C')}&radius=30000&keyword=haunted%20house&key=${
        process.env.REACT_APP_gMapAPIKey
      }`;
      console.log('pumpkinPatchURL: ', pumpkinPatchURL);
      console.log('hauntedHouseURL: ', hauntedHouseURL);
      const hauntedHousesIsChecked = (document.getElementById('haunted-houses') as HTMLInputElement)
        .checked;
      const pumpkinPatchesIsChecked = (
        document.getElementById('pumpkin-patches') as HTMLInputElement
      ).checked;
      if (hauntedHousesIsChecked && pumpkinPatchesIsChecked) {
        const fn = async () => {
          const res1 = fetch(pumpkinPatchURL, {mode: 'no-cors'});
          const res2 = fetch(hauntedHouseURL, {mode: 'no-cors'});
          const finalRes = await Promise.all([res1, res2]);
          const jsonRes1 = await finalRes[0].json()
          const jsonRes2 = await finalRes[1].json()
          console.log(jsonRes1, jsonRes2)
        };

        fn();
      }

      console.log('hauntedHousesIsChecked: ', hauntedHousesIsChecked);
      console.log('pumpkinPatchesIsChecked: ', pumpkinPatchesIsChecked);
    }
  };
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
