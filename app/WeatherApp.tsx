"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import EventHandler from './ApiHandler.jsx'
import { emitKeypressEvents } from "readline";
import NextResponse from "next/server";
import ApiHandler from "./ApiHandler.jsx";
import { ChangeEvent, FormEvent } from "react";

//declare var keyPressed: boolean;

export default function WeatherApp() {
  
  //const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //    console.log(e.key)
      //}  
/*
      declare global {
  var keyPressed: boolean;
}
  */
 
  

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
let latitude = "";
let longitude = "";
let latParams = new URLSearchParams;
let lonParams = new URLSearchParams;
  //const selectedLocation = searchParams.get("location");
 // console.log("this is selectedLocation " + selectedLocation);
  //const setLocation;
 
//async function onSubmit(event: FormEvent<HTMLFormElement>){
   const onSubmit = (e: FormEvent) => {
  try {
   e.preventDefault()
    //const formData = new FormData(event.currentTarget)
    //location = formData.toString();
    searchLat()
    
   // replace(`?${latParams}${lonParams}`)
    ApiHandler(latitude, longitude);
    //console.log(location)
  } catch(error)
  {
    console.error(error);
  }
}

//the plan is to have 2 seperate set functions
/*
one will be for lat and the other for long
so separate the long and lat specific code in set location
call apihandler in onsubmit after searchlocation

*/
function setLat(lat: string){
    //console.log("this is keypressed before if" + keyPressed)
    
    //console.log("this is key pressed " + keyPressed);
    latitude = lat;
    
    //console.log("this is location now after setting it" + location);
   //   const selectedLocation = searchParams.get("location");
    //  console.log("this is selectedLocation " + selectedLocation);
   // latParams = new URLSearchParams({latitude: lat});
   
    //
   // console.log("this is keypressed in if" + keyPressed)
    
    }

  function setLon(lon: string){
    longitude = lon;

  //  lonParams = new URLSearchParams({longitude: lon})
  }


//let keyPressed:boolean = false;
  function searchLat(){
   
        
        //console.log("this e.target.value for event passed to search location " );
        const params = new URLSearchParams(searchParams);
        console.log("this is if before location" + latitude);
        let latlon = latitude +","+ longitude
        if (latitude !=  ""){

            params.set('query', latlon);
            //console.log("this is location" + location);
            console.log("params" + params);
        } else{
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
        //console.log('if replace statement')
  //  }
 //   else{
  //      console.log("This should not be happening. Keys are pressed other than enter key");
  //  }
  //setLocation('')
  } 
//}    
/*



/*function change(evt: )
{
  event => setLocation(event.target.value)
  console.log("this is location" + location)
}
*/
return (
  <div className='app'>
    <div className="search">
      
      <form onSubmit={onSubmit}>
        <input
        //value={typeof location === 'string' ? location : ''}
        
        onChange={event => {setLat(event.target.value)}}
        
        
          placeholder="Enter Location"
          type="text"
         // defaultValue={searchParams.get('query')?.toString()}
        /> 
        <input
        onChange={event => {setLon(event.target.value)}}
        
        
        placeholder="Enter Location"
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
      /> 

      <button type="submit">Submit</button> 
      </form>
    </div>
  <div className="container">
    <div className="location">
    {/*   
        <p>{data.name}</p>
        */}
    </div>
    <div className ="temp">
     {/* {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null} 
     */}  



    </div>
  
  </div>
  

  
  </div>
);


}

