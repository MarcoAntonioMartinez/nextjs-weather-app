"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FormEvent } from "react";
import { QueryClient } from "@tanstack/react-query";
import Temps from "../components/Temps"

export default function WeatherApp() {
  
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  let latitude = "";
  let longitude = "";

  let isSubmitted = false;
   

//async function onSubmit(event: FormEvent<HTMLFormElement>){
   const onSubmit = (e: FormEvent) => {
  

    try {
      e.preventDefault()
    
      searchLat()
      const prams = searchParams.get("lat");
      console.log(prams + " thats latitude")

   
    } catch(error)
    {
      console.error(error);
    }

    isSubmitted = true;
}

function setLat(lat: string){
  
    latitude = lat;
        
    }

  function setLon(lon: string){
    longitude = lon;

  }

  //updates search params
  function searchLat(){
   
        const params = new URLSearchParams(searchParams);
   
        let latlon = "lat=" + latitude +"lon="+ longitude
        if (latitude !=  ""){

            params.set('lat', latitude);
            params.set('lon', longitude);
            
        } else{
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
        
  } 


  return (
  
  <div className=" bg-[url('/sunset.jpg')] w-full h-full bg-cover bg-center bg-no-repeat md:h-[100vh]">
  <div className='box-border m-0 p-0 text-white ' > 
  
  
    
    <div className="text-center p-4">
      
      <form onSubmit={onSubmit}>
        <input className="text-[1.2rem] border text-[#f8f8f8] px-6 py-[0.7rem] rounded-[25px] border-solid border-[rgba(255,255,255,0.8)] bg-transparent placeholder-grey-lightest"
        
        onChange={event => {setLat(event.target.value)}}
               
          placeholder="Enter Location"
          type="text"
        
        /> 
        <input className="bg-transparent"
        onChange={event => {setLon(event.target.value)}}
        placeholder="Enter Location"
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
        /> 

      <button type="submit">Submit</button> 
      </form>
    </div>
    <div className="max-w-[700px] h-[700px] relative flex flex-col justify-between m-auto px-4 py-0 top-[10%]">
      <div className="location">
      </div>
      <div className ="temp">
        {/* Attempt to show latitude, doesnt happen seems to be because variable isnt updated I think */} 
        <h1>{latitude }  </h1>
        {/* Attempt to make temps only show up if form has been submitted */} 
        <h1>{!globalThis.isSubmitted && <Temps />}</h1>   
      </div>
    </div>  
  </div>
  </div>
);


}

