

export default async function ApiHandler(location) {
  
  try{
    
    

    
    console.log(location + " thats location in api handler");

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.API_KEY}`
      );
  
    const res = await data.json();
    //[location, setLocation] = res;
    
    console.log(res.data);
    
      } catch (error){
          console.log("Error connecting to api");
          return new Response("Error in getting weather data", { status: 500 });
      }

}

