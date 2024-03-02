"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function WeatherApi() {
  
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const location= 'Dallas';
  //const setLocation;
  /*
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.API_KEY}`
    );

 // const res = await data.json();
  //[location, setLocation] = res;
  
 // console.log(res);
  */
        
const searchLocation = (event) => {
  if(event.key === 'Enter'){
   const params = new URLSearchParams(searchParams);
   if (location){
    params.set('query', location);
    console.log("this is location" + location);
    console.log("params" + params);
   } else{
    params.delete('query');
   }
   replace(`${pathName}?${params.toString()}`);
   console.log('if replace statement')
  }
  //setLocation('')
  } 
//}    

function change()
{
  event => setLocation(event.target.value)
  console.log("this is location" + location)
}

return (
  <div className='app'>
    <div className="search">
      <input
       value={typeof location === 'string' ? location : null}
       onChange={event => setLocation(event.target.value)}
       //onChange={change()}
         
                
      onKeyPress={searchLocation}
      
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

