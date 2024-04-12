import Sidebar from './sidebar';
import { mappls } from  'mappls-web-maps';
function  Trashout() {
const  styleMap  = {width:  '100%', height:  '100vh', display:'inline-block'}
const  mapProps  = { center: [28.6330, 77.2194], traffic:  false, zoom:  4, geolocation:  false, clickableIcons:  false }
var mapObject ;
var mapplsClassObject=  new  mappls();
const data= [{lat:28.5512908, lng:77.2680928},{lat:29.5512908, lng:79.2680928},{lat:28.5512908, lng:80.2680928}]


	mapplsClassObject.initialize("8f2b5e8c7f6dfb77cd53969e58420d29",()=>{
		mapObject = mapplsClassObject.Map({id:  "map", properties: mapProps});

		//load map layers/components after map load, inside this callback (Recommended)
		mapObject.on("load", ()=>{
			function marker(lat,lng){
      const markerObject = mapplsClassObject.Marker({
        map:  mapObject,
        position:{lat, lng},
        
        });}
		data.map(data=>{
			marker(data.lat,data.lng)
		})

		// Activites after mapload
		})

	});



return (
<div className='trashout'>
	<Sidebar/>

<div  id="map"  style={styleMap}></div>
  {/* <input type="text" placeholder='Enter logitude' id='longitude' /> */}

</div>
);
}
export  default  Trashout;
