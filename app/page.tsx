import WeatherApp from './WeatherApp';
import { QueryClient } from '@tanstack/react-query';
import fetchData from './fetchData';
import Temps from '@/components/Temps';
import { useSearchParams } from "next/navigation.js";
//this is version with lat lon
export default async function Home() {

  

  const queryClient = new QueryClient()
await queryClient.prefetchQuery({
  queryKey: ["wdata"],
  queryFn: () =>  fetchData(),
})

  
  return (
    <div>
    <WeatherApp />
    {/* globalThis.isSubmitted && <Temps /> */}
    </div>
  );
}
