"use client"

import { useQuery } from "@tanstack/react-query";
import fetchData from "../app/fetchData.jsx";  
import { useSearchParams } from "next/navigation.js";
/* 
export const fetchData = async () => {
  try{
     const response = await fetch("/api", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
  } catch(error){
      console.log(error);
  }
}
*/
export default function Temps(){

  //const pathName = usePathname();
  
  const  searchParams  = useSearchParams();
  
  const lat = searchParams.get('lat');
 // console.log("temps lat " + lat)
  const lon = searchParams.get('lon');
 // console.log("temps")

    const{  data, error, isError } = useQuery({
         queryKey: ["wdata", lat, lon], 
         queryFn:  () =>  fetchData({lat, lon}),
        
    });   
         /* queryFn: () =>
         fetch("/api", {
          headers: {
            Accept: "application/json",
            method: "GET",
          }},).then((res) =>
          res.json()),
         });*/
      
      if (isError) <span>Error: {error.message}</span>
      if(data){
console.log(data.main.temps)
      
      return(
        <div>
        <h1 className="text-white"> {data?.data}</h1>
        </div>
      )
  
      }

    }