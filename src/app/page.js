'use client'

import Image from "next/image";

import { useState } from "react";

import Map from "../components/Map";

import SpotCard from "../components/SpotCard";

const path_heroGallery = "/assets/herogallery/";
const heroOverlay = '/assets/hero_overlay.gif'

const imageClassName = "object-cover h-[33.33vh] w-[33.33vw]";
const imageFileNames = ["cafe.jpg", "cable_cars.png", "paintedladies.jpg", "dnd.jpg", "golden_gate.jpg", "hills_sf.png", "library.jpg", "movie.jpg"];

export default function MainInterface() {

  const [spots, setSpots] = useState([])
  const [initialized, setInitialized] = useState(false)

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          'hobbies': formData.get('hobbies'),
          'interests': formData.get('interests')
        }),
      });

      let data = await response.json();
      data = JSON.parse(data)
      console.log(data)
      setSpots([data["0"], data["1"], data["2"]]);
      setInitialized(true)
    } 
    catch(error) {
      console.error(error);
    }
    
  }

  return (
    <main className="w-screen h-screen">
      <Image width={1000} height={1080} src={heroOverlay} className="absolute w-screen h-screen opacity-10" alt="" priority/>
      <div>
          {/* bottom     */} <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-[20%]"></div>
          {/* cent-left  */} <div className="bg-gradient-to-l from-[#00000075] to-transparent absolute top-0 left-[25%] w-[25%] h-screen"></div>
          {/* cent-right */} <div className="bg-gradient-to-r from-[#00000075] to-transparent absolute top-0 right-[25%] w-[25%] h-screen"></div>
      </div>
      
      <div className="flex flex-row flex-wrap overflow-hidden">

        <Image src={path_heroGallery + "cafe.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "cable_cars.png"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "paintedladies.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "dnd.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "golden_gate.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "hills_sf.png"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "library.jpg"}  className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "movie.jpg"} className={imageClassName} alt="" width={500} height={500} />
        <Image src={path_heroGallery + "tram.jpg"} className={imageClassName} alt="" width={500} height={500} />
      </div>

      <div className="w-screen flex min-h-screen absolute flex-col items-center justify-between p-4 gap-y-4"> 
        <form className="bg-primred w-[60%] flex flex-col justify-center items-center gap-4 rounded-2xl opacity-90" onSubmit={onSubmit}>
          <label className="text-lg text-white font-semibold">List your Hobbies</label> 
          <input className="bg-white w-[40%] h-[20vh] rounded-xl text-center text-wrap" id="hobbies" name="hobbies" type="text" required={true} placeholder="Basketball, Gaming" />
          <label className="text-lg text-white font-semibold">List your Interests</label>
          <input className="bg-white w-[40%] h-[20vh] rounded-xl text-center text-wrap" id="interests" name="interests" type="text" required={true} placeholder="Movies, Music"/>
          <button className="bg-auto bg-darkblue text-white rounded-xl" type="submit">Submit</button>
        </form>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-4" >
        <Map />
        <div className="flex flex-row flex-auto justify-center gap-4">
          {initialized ? spots.map((spotDetails, index) => {
            console.log(spotDetails.Name, spotDetails.Description, spotDetails.Location)  
            return (
              <SpotCard title={spotDetails.Name} description={spotDetails.Description} location={spotDetails.Location} key={index} />
            )
          }) : <p className="text-white">Waiting...</p>}
        </div>
      </div>
      
    </main>
  );
}