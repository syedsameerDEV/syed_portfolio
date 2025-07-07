import { useState } from "react";

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Express.js",
    "Redux toolkit",
    "Zustand",
    "RESTful APIs",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Firebase",
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full font-normal text-sm cursor-pointer transition-colors duration-200 ${
              hoveredIndex === index
                ? "bg-secondary text-secondary-foreground"
                : "bg-transparent border border-border text-foreground"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 