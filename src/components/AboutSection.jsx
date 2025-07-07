import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">About</h2>
      <div className="pr-4">
        <p
          className={`text-base text-left md:text-justify mb-2 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          Hey, I'm a frontend developer who loves crafting beautiful and
          responsive user interfaces. I turn ideas into clean, functional web
          experiences and believe great design starts with great code. Currently
          building awesome stuff at NIELIT Chennai, where I contribute to
          real-world applications that make an impact.
        </p>
        {isExpanded && (
          <>
            <p className="text-base text-left md:text-justify mb-2">
              I'm obsessed with detail — from pixel-perfect layouts to smooth
              interactions. My journey into full stack development has just
              begun, and I’m loving every second of learning and shipping.
              Whether it’s solving UI puzzles or bringing ideas to life, I build
              with curiosity, consistency, and just a bit of coffee ☕.
            </p>
          </>
        )}
        <button
          onClick={toggleExpand}
          className="p-0 mb-2 text-blue-500 hover:text-blue-700 underline"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
