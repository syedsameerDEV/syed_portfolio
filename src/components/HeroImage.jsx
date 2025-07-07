import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const HeroImage = () => {
  const [isHoveringHeroImage, setIsHoveringHeroImage] = useState(false);

  return (
    <RoughNotation
      type="circle"
      color="#df8c4a"
      animationDelay={100}
      show={isHoveringHeroImage}
      padding={30}
    >
      <img
        className="rounded-xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:shadow-xl hover:-rotate-3"
        src="/images/sameer_photo.jpg"
        alt="Syed Sameer"
        width={250}
        height={250}
        onMouseEnter={() => setIsHoveringHeroImage(true)}
        onMouseLeave={() => setIsHoveringHeroImage(false)}
      />
    </RoughNotation>
  );
};

export default HeroImage; 