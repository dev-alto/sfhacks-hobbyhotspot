import Image from "next/image";

import LocationCard from "../../components/SpotCard";
import Map from "../../components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-4">
      <Map/>
      <div className="flex flex-row justify-center gap-4">
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </main>
  );
}