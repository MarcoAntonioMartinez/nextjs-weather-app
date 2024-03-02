"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import EventHandler from './EventHandler.jsx'
import { emitKeypressEvents } from "readline";

export default function WeatherApi() {
  
  const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key)
      }  

      
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const location= 'Dallas';
  const selectedLocation = searchParams.get("location");
  //const setLocation;
  /*
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.API_KEY}`
    );

 // const res = await data.json();
  //[location, setLocation] = res;
  
 // console.log(res);
  */
 /*   replace.push(
        `?location=${location}`
        ,{
           scroll:false, 
        }
    );    
*/
  function searchLocation(evt: React.KeyboardEvent<HTMLInputElement> ){
   
    
    if(evt.key === 'Enter'){
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

/*function change()
{
  event => setLocation(event.target.value)
  console.log("this is location" + location)
}
*/
return (
  <div className='app'>
    <div className="search">
      <input
       value={typeof location === 'string' ? location : ''}
       onChange={event => setLocation(event.target.value)}
       //onChange={change()}
         
                
      onKeyPress={ event => searchLocation(event)}
      
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

