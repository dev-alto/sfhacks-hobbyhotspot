import Image from "next/image";

import Map from "../components/Map"

import UserInputForm from "../components/UserInputForm"; 

const path_heroGallery = "/assets/herogallery/"

const imageClassName = "object-cover h-[40vh] w-[33vw]"

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row flex-wrap w-screen">
        <Image src={path_heroGallery + "cafe.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "cable_cars.png"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "paintedladies.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "dnd.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "golden_gate.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "hills_sf.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "library.jpg"}  className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "movie.jpg"} className={imageClassName} alt="" width={500} height={500} />
      </div>

      <Map />
      
      <UserInputForm />
    </main>
  );
}