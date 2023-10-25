import Image from "next/image";
import NavBar from "./NavBar";
import MainSection from "./MainSection";

function Herosection() {
  return (
    <div className="bg-hero-section relative">
      <div className="z-50 relative">
        <NavBar />
      </div>

      <div className="absolute top-3 opacity-90 h-full">
        <Image
          src={"/Blob.png"}
          alt="blob"
          width={"350"}
          height={"350"}
          className="h-full w-[100%]"
        />
      </div>
      <div className="relative z-10 px-10 lg:mt-0 mt-10">
        <MainSection />
      </div>
    </div>
  );
}

export default Herosection;
