"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import EventHandler from './ApiHandler.jsx'
import { emitKeypressEvents } from "readline";
import NextResponse from "next/server";
import ApiHandler from "./ApiHandler.jsx";
import { ChangeEvent } from "react";

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
  globalThis.keyPressed = false
 let location = '';
  //const selectedLocation = searchParams.get("location");
 // console.log("this is selectedLocation " + selectedLocation);
  //const setLocation;
  /*
  try{
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.API_KEY}`
    );
/*
  const res = await data.json();
  //[location, setLocation] = res;
  
  console.log(res.data);
  
    } catch (error){
        console.log("Error connecting to api");
        return new Response("Error in getting weather data", { status: 500 });
    }
//*/
 /*   replace.push(
        `?location=${location}`
        ,{
           scroll:false, 
        }
    );    
*/
/*
function vents(evt: ChangeEvent<HTMLInputElement>, pressed: boolean){
  if(pressed){  
  let locate = evt.target.value;
    setLocation(locate, pressed);
  }
}
*/

function setLocation(lct: string, evt: ChangeEvent<HTMLInputElement>){
    //console.log("this is keypressed before if" + keyPressed)
    evt.preventDefault();
    console.log("this is key pressed " + keyPressed)
    if(globalThis.keyPressed){ 
      const selectedLocation = searchParams.get("location");
      console.log("this is selectedLocation " + selectedLocation);
    replace(`?${new URLSearchParams({location: lct})}`)
   // console.log("this is keypressed in if" + keyPressed)
     ApiHandler(location);
    }
}


//let keyPressed:boolean = false;
  function searchLocation(evt: React.KeyboardEvent<HTMLInputElement>){
   evt.preventDefault();
    let eveventChange ;
  //  if(evt.key === 'Enter'){
        
        globalThis.keyPressed = true;

        //console.log("this e.target.value for event passed to search location " );
        const params = new URLSearchParams(searchParams);
        console.log("this is if before location" + location);
        if (location != ''){
            params.set('query', location);
            console.log("this is location" + location);
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
      <input
       //value={typeof location === 'string' ? location : ''}
       
       onChange={event => {setLocation(event.target.value, event)}}
       //onChange={change()}
         
                
      onKeyDown={ event => {event.key === 'Enter' ? searchLocation(event) : null} }
      
        placeholder="Enter Location"
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
      /> 
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

