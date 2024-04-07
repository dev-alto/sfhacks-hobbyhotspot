import { GrMapLocation } from "react-icons/gr";

import Image from "next/image"

const spotImage = "/assets/herogallery/cafe.jpg"

export default function LocationCard(props) {

  return (
    <div className="flex flex-col items-center gap-[0.5px] w-[400px] h-[550px] rounded-2xl bg-primyellow opacity-80"> 
      <Image src={spotImage} alt="" width={300} height={150} className="w-full rounded-2xl"/> 

      <div className="py-4">
        <p className="text-center font-bold text-2xl">{props.title}</p>
        <div className="flex flex-row justify-center items-center">
          <GrMapLocation />
          <p className="text-center h-[20px] ml-1">{props.location}</p>
        </div>
        
        <p className="text-center pt-2 px-8">{props.description}</p>
      </div>

    </div>
    )
}
//Output of Name, Location, Description
