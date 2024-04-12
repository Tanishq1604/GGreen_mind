import { mappls } from  'mappls-web-maps';
function  Trashout() {
const  styleMap  = {width:  '60%', height:  '400px', display:'inline-block'}
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
<div  id="map"  style={styleMap}></div>
</div>
);
}
export  default  Trashout;
