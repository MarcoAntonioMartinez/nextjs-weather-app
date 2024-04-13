"use client"

import { useQuery } from "@tanstack/react-query";
import fetchData from "../app/fetchData.jsx";  
import { useSearchParams } from "next/navigation.js";

export default function Temps(){
 
 //console logs work here 
  const  searchParams  = useSearchParams();
  
  const lat = searchParams.get('lat');
 
  const lon = searchParams.get('lon');
 

    const{  data, error, isError } = useQuery({
         queryKey: ["wdata", lat, lon], 
         queryFn:  () =>  fetchData({lat, lon}),
        
    });   
      
      if (isError) <span>Error: {error.message}</span>
      if(data){
        //none of it works past this bc apparently no data
console.log(data.main.temps)
      
      return(
        <div>
        <h1 className="text-white"> {data?.data}</h1>
        </div>
      )
  
      }

    }