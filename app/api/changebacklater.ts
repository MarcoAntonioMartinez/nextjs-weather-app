import { NextResponse } from "next/server";


export async function GET(request: Request) {
  
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')
    
  try{
    
    
 
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=imperial`        );

   const data = await response.json();
    
    console.log(data);

    return NextResponse.json(data);
    
      } catch (error){
          console.log("Error connecting to api");
          return new NextResponse("Error in getting weather data", { status: 500 });
      }

}
