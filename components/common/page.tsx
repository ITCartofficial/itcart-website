import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-16">
      <div className="w-full h-[90vh] relative border-b border-[#303030]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute -top-24 left-0 w-full h-full object-cover -z-30"
        >
          <source src="/assets/home-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="wrapper h-full bg-gradient-to-b from-[#000000]/0 to-[#000000]/100 py-8">
          <div className="max-w-[1150px] h-full mx-auto flex flex-col justify-end">
            <div className="flex flex-col gap-4 items-start text-left w-[60%]">
              <h1 className="font-bold text-[64px] leading-[1.2em]">The world&apos;s first native operating system</h1>
              <p className="text-2xl">Experience unmatched efficiency, innovation, and business agility with a multi-functional AI-native platform.</p>
              <button className="text-white py-3 px-6 border border-amber-50 rounded flex items-center gap-2 cursor-pointer">
                <span>Get Started</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}