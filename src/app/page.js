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
  const [currentSpot, setCurrentSpot] = useState(2)
  const [initialized, setInitialized] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true)

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          'hobbies': formData.get('hobbies'),
          'interests': formData.get('interests'),
          'tags': formData.get('tags')
        }),
      });

      let data = await response.json();
      data = JSON.parse(data)
      setSpots(Object.values(data));
      setInitialized(true)
      setLoading(false)
    } 
    catch(error) {
      console.error(error);
    }
    
  }

  return (
    <main className="w-screen h-screen">
      <Image width={1000} height={1080} src={heroOverlay} className="absolute w-screen h-screen opacity-[15%]" alt="" priority/>
      <div className="w-screen h-screen absolute">
          {/* bottom     */} <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-screen h-[20%]"></div>
          
          {/* cent-left  */} <div className="bg-gradient-to-l from-[#7dffbe50] to-transparent absolute right-0 w-[25%] h-full"></div>
          {/* cent-right */} <div className="bg-gradient-to-r from-[#e37bf350] to-transparent absolute left-0 w-[25%] h-full"></div>

          {/* cent-left  */} <div className="bg-gradient-to-l from-[#00000070] to-transparent absolute top-0 left-[25%] w-[25%] h-full"></div>
          {/* cent-right */} <div className="bg-gradient-to-r from-[#00000070] to-transparent absolute top-0 right-[25%] w-[25%] h-full"></div>
      </div>

      <div className="w-screen h-screen flex flex-col absolute justify-center items-center text-white text-center">
        <p className="font-bold text-4xl">🔥 Welcome to Hobby Hotspot!</p>
        <p className="text-2xl">A tool to find your own spaces in the City of San Francisco.</p>
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
        <form className="bg-[#ffc444c9] w-[60%] flex flex-col translate-y-[-75%] justify-center items-center gap-4 rounded-2xl opacity-[99%] py-4" onSubmit={onSubmit}>
          <label className="text-lg text-white font-semibold">🚀 What are your Hobbies?</label>
          <input className="bg-white w-[70%] h-[28px] rounded-xl text-center text-wrap transition-all hover:outline-orange-400 hover:outline-4 outline" id="hobbies" name="hobbies" type="text" required={true} placeholder="These themes will pertain towards your general interests." />
          <label className="text-lg text-white font-semibold">👍 Specify your Hotspot Interests</label>
          <input className="bg-white w-[70%] h-[28px] rounded-xl text-center text-wrap transition-all hover:outline-green-400 hover:outline-4 outline" id="interests" name="interests" type="text" required={true} placeholder="What specific places? Movies, Jazz, Restaurants, etc."/>
          <button className="bg-auto bg-green-500 text-white rounded-xl px-4" type="submit">Submit</button>
        </form>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-4" >
        <p>Test</p>
        { (currentSpot && initialized) ? <Map locationQuery={currentSpot.Location} /> : <></> }
        <div className="flex flex-row flex-auto justify-center gap-4">
          { 
            initialized ? spots.map((spotDetails, index) => {
              console.log(spotDetails.Name, spotDetails.Description, spotDetails.Location)  
              return (
                <SpotCard onMouseEnter={() => setCurrentSpot(index)} title={spotDetails.Name} description={spotDetails.Description} location={spotDetails.Location} tags={spotDetails.Tags} key={index} index={index}  />
              )
            }) : <p className="text-white"></p>
          }
        </div>
      </div>
      
    </main>
  );
}