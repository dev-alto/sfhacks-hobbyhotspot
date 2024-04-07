export default function Navbar() {
  return (
      <div className="flex flex-row justify-between align-middle items-center gap-4 w-screen px-8 py-2 bg-primyellow h-[60px]">
        <p className="text-xl font-semibold text-black">🌉 Hobby Hotspot</p>
        <div className="flex flex-row gap-4 text-lg text-black">

          <div className="py-4 px-8">
            <button>
              Interests
            </button>
          </div>

        </div>
    </div>
    );
}