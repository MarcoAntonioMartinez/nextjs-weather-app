"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ApiHandler from "./ApiHandler.jsx";
import { ChangeEvent, FormEvent } from "react";
import { QueryClient } from "@tanstack/react-query";
import Temps from "../components/Temps"
import fetchData from "./fetchData.jsx";
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
let weather = 'i am writing this in html';
let isSubmitted = false;

//let data = "";
  //const selectedLocation = searchParams.get("location");
 // console.log("this is selectedLocation " + selectedLocation);
  //const setLocation;
 /*
  const fetchDataFromApi = async () => {
    try{
       const response = await fetch("/api", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        
        console.log(data);
        return data;
       //console.log(response)
      }
      else{ console.log("no data")}
    } catch (error) {
      console.log(error);
    }
  };
*/
/*
const queryClient = new QueryClient()
await queryClient.prefetchQuery({
  queryKey: ["wdata"],
  queryFn: () =>  fetchData(),
})
*/
   

//async function onSubmit(event: FormEvent<HTMLFormElement>){
   const onSubmit = (e: FormEvent) => {
  
   //weather = fetchDataFromApi();

    try {
   e.preventDefault()
    //const formData = new FormData(event.currentTarget)
    //location = formData.toString();
    searchLat()
  const prams = searchParams.get("lat");
    console.log(prams + " thats latitude")

   // replace(`?${latParams}${lonParams}`)
   //const data = ApiHandler(latitude, longitude);
//sd(data)
//console.log(data)
/*const data = ApiHandler(latitude, longitude)
  .then((response) => response?.json())
  .then ((value:string) => {
    console.log(value)
    return value; 
   
  })

const displayData = () => {
    data.then((a) => {
    console.log(a)
  })
 }

 displayData()
*/

 // console.log(weather)

    //data: {main: temp:Number;}
    //console.log(location)
   // const temp = (data).main.temp;

   /* 
    const temp = data.then( (value) => {
      return value
    })
    console.log(temp)
    */
    //sd()
  } catch(error)
  {
    console.error(error);
  }

isSubmitted = true;
}

/*
 function sd(data: Promise<Response>){
const temp = data.then( function(value) {
      return value
    })
    console.log(temp)
}
*/
//the plan is to have 2 seperate set functions
/*
one will be for lat and the other for long
so separate the long and lat specific code in set location
call apihandler in onsubmit after searchlocation

*/
function setLat(lat: string){
  
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
   //     console.log("this is if before location" + latitude);
        let latlon = "lat=" + latitude +"lon="+ longitude
        if (latitude !=  ""){

            params.set('lat', latitude);
            params.set('lon', longitude);
            //console.log("this is location" + location);
    //        console.log("params" + params);
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
  //this is where app is
  <div className=" bg-[url('/sunset.jpg')] w-full h-full bg-cover bg-center bg-no-repeat md:h-[100vh]">
  <div className='box-border m-0 p-0 text-white ' > 
  
    {/* this is where search is style={{backgroundImage: `url('/sunset.jpg')`, position:"absolute", width:"100vw", height: "100vh",}}  >*/}
    
    <div className="text-center p-4">
      {/*<Image className="h-auto max-w-full" src="./public/sunset.jpg" 
      width={100}
      height={100}
      alt="sunset"
      />*/}
      
      <form onSubmit={onSubmit}>
        <input className="text-[1.2rem] border text-[#f8f8f8] px-6 py-[0.7rem] rounded-[25px] border-solid border-[rgba(255,255,255,0.8)] bg-transparent placeholder-grey-lightest"
        //value={typeof location === 'string' ? location : ''}
        
        onChange={event => {setLat(event.target.value)}}
        
        
          placeholder="Enter Location"
          type="text"
         // defaultValue={searchParams.get('query')?.toString()}
        /> 
        <input className="bg-transparent"
        onChange={event => {setLon(event.target.value)}}
        placeholder="Enter Location"
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
        /> 

      <button type="submit">Submit</button> 
      <h1>{latitude}  </h1>
      </form>
      <h1>{latitude}  </h1>
    </div>
    {/* container */}
  <div className="max-w-[700px] h-[700px] relative flex flex-col justify-between m-auto px-4 py-0 top-[10%]">
    <div className="location">
    {/*   
        <p>{data.name}</p>
        */}
     <h1>{latitude}  </h1>    
    </div>
    <div className ="temp">
     <h1>{latitude ? <h1> latitude </h1> : null}  </h1>
    <h1>{!globalThis.isSubmitted && <Temps />}</h1>
     {// {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null} <h1>{weather}</h1> : null} 
     }  



    </div>
    </div>  
  </div>
  

  
  </div>
);


}

