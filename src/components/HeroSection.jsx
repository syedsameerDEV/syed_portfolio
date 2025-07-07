import { RoughNotation } from "react-rough-notation";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <main className="flex flex-col gap-6 items-center sm:items-start pl-0 sm:px-14 md:pl-20 flex-grow">
      <div className="mt-16">
        <HeroImage />
      </div>
      <h1 className="text-4xl xl:text-5xl font-bold">Syed Sameer</h1>
      <ol className="list-inside text-sm text-center sm:text-left font-mono">
        <li className="mb-2">
          Frontend Developer at{" "}
          <RoughNotation
            type="highlight"
            color="#df8c4a"
            animationDelay={150}
            show
          >
            NIELIT Chennai
          </RoughNotation>{" "}
          
        </li>
        <li className="mb-2">Passionate about building clean, user-focused interfaces</li>
        <li className="mb-2">On a journey to becoming a full stack developer</li>
        <li className="mb-2">Truly love working on Web</li>
      </ol>
    </main>
  );
};

export default HeroSection; 