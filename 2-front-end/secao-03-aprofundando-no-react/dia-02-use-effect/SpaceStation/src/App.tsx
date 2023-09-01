import { useState, useEffect } from "react";
import { fetchCordinates } from "./services";


type Coordinates = {
  latitude: number;
  longitude: number;
}

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h2>International Space Station Location Tracker</h2>
      {coordinates && (
        <>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </>
      )}
    </>
  )
}

export default App
