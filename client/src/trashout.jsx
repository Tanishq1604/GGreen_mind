
import { mappls } from  'mappls-web-maps';
import Sidebar from './sidebar';
function  Trashout() {
const  styleMap  = {width:  '60%', height:  '32rem', display:'inline-block',position : "relative", left : "31rem",borderRadius : "20px", zIndex : "0"}
const  mapProps  = { center: [28.5512908, 77.26809282], traffic:  false, zoom:  4, geolocation:  false, clickableIcons:  false }
var mapObject ;
var mapplsClassObject=  new  mappls();

	mapplsClassObject.initialize("8f2b5e8c7f6dfb77cd53969e58420d29",()=>{
		mapObject = mapplsClassObject.Map({id:  "map", properties: mapProps});

		//load map layers/components after map load, inside this callback (Recommended)
		mapObject.on("load", ()=>{
		// Activites after mapload
		})
    markerObject = mapplsClassObject.marker({
      map:  mapObject,
      position:{lat:28.5512908, lng:77.26809282},
      icon_url:
          "http://www.mapmyindia.com/api/advanced-maps/doc/sample/map_sdk/car.png", //Place your icon url
        repeat: false, 
      });

	});





return (
<div>
  <Sidebar/>
<div  id="map"  style={styleMap}>

</div>
<i class="fa-solid fa-trash inside-map"></i>
</div>
);
}
export  default  Trashout;
