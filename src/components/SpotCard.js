import { GrMapLocation } from "react-icons/gr";
import { motion } from "framer-motion"
import { useState } from "react";

import Image from "next/image"

const spotImage = "/assets/herogallery/cafe.jpg"

export default function LocationCard(props) {

  return (
    <motion.div initial={{ opacity: 0, transform: "translateY(-50%)" }} animate={{ opacity: 1, transform: "translateX(0%)" }} transition={{duration: 3, delay: props.index * 0.4, ease: "easeOut"}} className="flex flex-col items-center gap-[0.5px] w-[400px] h-[550px] rounded-2xl bg-primyellow opacity-80"> 
      <Image src={spotImage} width={300} height={150} className="w-full rounded-2xl" alt=""/> 

      <div className="py-4">
        <p className="text-center font-bold text-2xl text-white w-full bg-yellow-500 mb-2">{props.title}</p>
        <div className="flex flex-row justify-center items-center">
          <GrMapLocation className="aspect-square" />
          <p className="text-center h-[20px] ml-[5px] font-semibold">{props.location}</p>
        </div>
        
        <p className="text-center pt-2 px-8">{props.description}</p>
      </div>

    </motion.div>
    )
}
//Output of Name, Location, Description
