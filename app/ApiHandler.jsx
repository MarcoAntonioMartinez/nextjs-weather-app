import { NextResponse } from "next/server";

export default async function ApiHandler(lat, lon) {
  
  try{
    
    
    console.log(lat + " thats lat in api handler");

 
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`
        );
//tried using this but i guess doesnt work idk https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.API_KEY}`
    //[location, setLocation] = res;
   const data = await response.json();
    
    console.log(data);

    //return NextResponse.json(data);
    
      } catch (error){
          console.log("Error connecting to api");
          return new Response("Error in getting weather data", { status: 500 });
      }

}

//idea if i go with geocoding just make it autofill for state code and country code
//only make state and country code editable if user needs to change it
//ex: user wants to look for a city which also exists in at least one other state
//then they can change it
//so i guess it would have to be not read only but autofilled
//so i guess just add in a library which can autofill with city, state, country
//maybe all in so search would have autofill for city,state,country and you 
//  put in city and you click one from all the options


