import { parse, differenceInYears, differenceInMonths } from "date-fns";

const calculateDuration = (startDate, endDate) => {
  const start = parse(startDate, "MMM yyyy", new Date());
  const end =
    endDate === "Present" ? new Date() : parse(endDate, "MMM yyyy", new Date());

  const years = differenceInYears(end, start);
  const months = (differenceInMonths(end, start) % 12) + 1;

  return `${years} yr${years !== 1 ? "s" : ""} ${months} mo${
    months !== 1 ? "s" : ""
  }`;
};

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "NIELIT Chennai",
      logo: "/svg/NIELIT-Logo.png",
      position: "Frontend Developer",
      startDate: "Jul 2023",
      endDate: "Present",
    },
    {
      id: 2,
      company: "saaSForest",
      logo: "/svg/saaslogo.svg",
      position: "Frontend Developer",
      startDate: "Dec 2022",
      endDate: "Jun 2023",
    },
    {
      id: 3,
      company: "8Queens Software Technologies Private Limited ",
      logo: "/svg/8_queensLogo.webp",
      position: "Software Engineer (Intern)",
      startDate: "Jul 2022",
      endDate: "Dec 2022",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Experience</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="rounded-2xl w-full lg:w-52 border bg-card p-4"
          >
            <div className="pb-0 text-sm">
              <img
                src={experience.logo}
                alt={experience.company}
                className="mb-2 w-10 h-10 object-contain"
              />
              <span className="text-slate-600">{experience.company}</span>
            </div>
            <div className="pt-2">
              <div className="pb-1 text-base font-medium text-zinc-700">
                {experience.position}
              </div>
              <div className="pb-3 text-sm text-muted-foreground">
                {experience.startDate} - {experience.endDate} <br />{" "}
                {calculateDuration(experience.startDate, experience.endDate)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
