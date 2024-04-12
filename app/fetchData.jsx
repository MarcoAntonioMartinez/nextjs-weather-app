"use client"




async function getData({ lat, lon}){
  const options = {
    method:"GET",
    headers: {
      accept: "application/json",
    },
  };

  console.log(options)
    console.log("lat and lon " + lat + ", " + lon)

try {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`,
        options)
        const data = await response.json();
        console.log(response)
        console.log(data)
        //console.log("lat and lon " + lat + ", " + lon)
        return data;  
      
      } catch(err) {
        console.error(err);
        throw err; //re throw for query
      };

      

}

export default async function fetchData({ lat, lon}){
  
      
 //       const response = await fetch(`${pathName}/api`)

/*
 const response = await fetch(`./api/`, {
       
          headers: {
           Accept: "application/json",
           method: "GET",
         },
       });
*/

//const data = await getData();

//
console.log("lat and lon " + lat + ", " + lon)
console.log(data.data)
return getData({ lat, lon});

}