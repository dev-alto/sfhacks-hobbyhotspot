import { SiDiscord } from "react-icons/si"

export default function Navbar() {
  return (
      <div className="flex flex-row justify-between align-middle items-center gap-4 w-screen px-8 py-2 bg-primyellow h-[60px]">
        <p className="text-xl font-semibold text-black">🌉 Hobby Hotspot</p>
        <div className="flex flex-row gap-4 text-lg text-black">

          <div className="py-4 px-8 flex flex-row items-center justify-center">
            <SiDiscord className="mr-2" /> <a className="text-blue-600" href="https://discord.com/api/oauth2/authorize?client_id=1226220638927065299&permissions=8797166831616&scope=bot">Discord Bot Created by Coze</a>
          </div>

          <div className="py-4 px-8 flex flex-row items-center justify-center">
            <SiDiscord className="mr-2" /> <a className="text-white" href="https://discord.com/api/oauth2/authorize?client_id=1226220638927065299&permissions=8797166831616&scope=bot"  >Coze Chatbot</a>
          </div>

        </div>
    </div>
    );
}