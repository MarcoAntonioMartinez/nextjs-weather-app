import WeatherApp from './WeatherApp';
import { QueryClient } from '@tanstack/react-query';
import fetchData from './fetchData';

export default async function Home() {
  
  //try to make this work and have data display for when temps was here
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["wdata"],
    queryFn: () =>  fetchData(),
})

  
  return (
    <div>
    <WeatherApp />
    {/* figured since I only want it shown when form has been submitted that it makes more sense
          to put Temps in WeatherApp */}
    {/* globalThis.isSubmitted && <Temps /> */}
    </div>
  );
}
