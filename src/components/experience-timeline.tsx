import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "./ui/badge";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const EXPERIENCE_LIST = [
  {
    timeline: "2021 - PRESENT",
    title: "Full Stack Software Engineer - Slalom Build",
    link: "https://www.slalombuild.com/",
    description:
      "Developed internal social media platform from scratch with two other engineers that drove $5 million in revenue + costs saved and resulted in two more project initiatives. Built end-to-end features such as a custom file manager component that performed CRUD operations to Azure Blob Storage in React, TypeScript and Next.js while enforcing secure file sharing and best practices.",
    badges: [
      "JavaScript",
      "TypeScript",
      "C#",
      "React",
      "Next.js",
      "Redux",
      "Storybook",
    ],
  },
  {
    timeline: "2019 - 2020",
    title: "Full Stack Developer - Ceridian Dayforce",
    link: "https://www.dayforce.com/ca",
    description:
      "Developed and deployed end-to-end features using C#, JavaScript, SQL and Git on a team of three developers. Implemented new UI authentication features from mocks to prevent embezzlement from payroll employees. Implemented API security checks to defend against vulnerability attacks through robust user validation.",
    badges: ["JavaScript", "C#", "SQL"],
  },
];

export default function ExperienceTimeline() {
  return (
    <>
      <div id="experience" className="anchor" />
      <div>
        <h3>Experience</h3>
        <div
          id="experience"
          className="grid grid-cols-[0.5fr_2fr] gap-x-6 gap-y-8"
        >
          {EXPERIENCE_LIST.map((item) => (
            <>
              <div
                id="experiences-dates"
                className="text-sm font-semibold text-grey"
              >
                {item.timeline}
              </div>
              <div>
                <span className="text-base font-semibold hyperlink flex flex-row items-center gap-2">
                  <a href={item.link}>{item.title}</a>
                  <FontAwesomeIcon
                    className="h-2 w-2"
                    icon={faArrowUpRightFromSquare}
                  />
                </span>
                <p className="text-sm/6">{item.description}</p>
                <div className="flex flex-row gap-2 mt-2">
                  {item.badges.map((badge) => (
                    <Badge className="badges" key={badge}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
