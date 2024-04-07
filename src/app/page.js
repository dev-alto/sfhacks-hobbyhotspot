import Image from "next/image";

import Map from "../components/Map"

import UserInputForm from "../components/UserInputForm";
import LocationCard from "../components/LocationCard" 

const path_heroGallery = "/assets/herogallery/"

const imageClassName = "object-cover h-[40vh] w-[33.33vw] animate-infinite-scroll"
const imageFileNames = ["cafe.jpg", "cable_cars.png", "paintedladies.jpg", "dnd.jpg", "golden_gate.jpg", "hills_sf.png", "library.jpg", "movie.jpg"]

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row w-screen">
        <Image src={path_heroGallery + "cafe.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "cable_cars.png"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "paintedladies.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "dnd.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "golden_gate.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "hills_sf.png"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "library.jpg"}  className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "movie.jpg"} className={imageClassName} alt="" width={500} height={500} />
      </div>

      <Map />

      <div className="flex flex-row justify-center gap-4">
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
      
      <UserInputForm />
    </main>
  );
}