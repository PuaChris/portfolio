import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "./ui/badge";

const PROJECT_LIST = [
  {
    title: "Foodie",
    link: "https://github.com/PuaChris/foodie",
    description:
      "A web app that can save restaurant information such as the items ordered, location, pricing, and emotions regarding the restaurant and food ordered.",
    badges: [
      "TypeScript",
      "React",
      "Next.js",
      "Vercel",
      "TypeORM",
      "PostgreSQL",
      "Heroku",
    ],
  },
  {
    title: "SpaceX Launch Dashboard",
    link: "https://github.com/PuaChris/spacex-launch-dashboard",
    description:
      "Dashboard web app that is able to list Rocket Launches, along with the ability to click into a Launch for additional information on the rocket. Data is retrieved using SpaceX's open API.",
    badges: ["TypeScript", "React", "SpaceX API"],
  },
  {
    title: "ForeSight",
    link: "https://github.com/PuaChris/ForeSight",
    description:
      "A mobile app that screens medical skin conditions with 85.68% accuracy from a machine learning R-CNN model hosted on an EC2 instance.",
    badges: ["Flutter", "Android/iOS", "Python", "AWS", "ML"],
  },
  {
    title: "Domments",
    link: "https://github.com/PuaChris/Domments-Client",
    description:
      "A Chrome Extension that saves personal comments on any web-page by communicating to a custom RESTful API that handles CRUD operations on the Firestore database.",
    badges: ["JavaScript", "React", "Node.js", "Express", "NoSQL", "Firebase"],
  },
  {
    title: "24 Hour Thermometer Challenge",
    link: "https://github.com/PuaChris/24hr-thermometer-challenge",
    description:
      "Web app built within 24 hours that displays thermostatic data",
    badges: ["JavaScript", "React", "Heroku"],
  },
  {
    title: "Pomodoro Extension",
    link: "https://github.com/PuaChris/pomodoro-extension",
    description:
      "Pomodoro timer web UI on Heroku with a state management system to automate stages of a Pomodoro cycle and utilized local storage for users to save for timer configurations. Built as an exercise to learn Meteor.js and Firestore.",
    badges: ["JavaScript", "React", "Meteor.js", "NoSQL", "Firebase", "Heroku"],
  },
  {
    title: "Google Maps Replica with A*",
    link: "https://github.com/PuaChris/Google-Maps",
    description:
      "Designed a GIS to analyze and present spatial data of major cities around the world and offered route planning for travel purposes. Implemented A* algorithm to compute optimal paths within cities with a travel time-based heuristic, reducing computation times by 50% from Dijkstra's algorithm",
    badges: ["C++", "A* Algorithm"],
  },
];

export default function ProjectList() {
  return (
    <>
      <div id="projects" className="anchor" />
      <div>
        <h3>Projects</h3>
        <div>
          {PROJECT_LIST.map((item) => (
            <div key={item.title} className="mb-6">
              <span className="text-base font-semibold hyperlink flex flex-row items-center gap-2">
                <a href={item.link}>{item.title}</a>
                <FontAwesomeIcon
                  className="h-2 w-2"
                  icon={faArrowUpRightFromSquare}
                />
              </span>
              <p className="text-sm/6">{item.description}</p>
              <div className='flex flex-row gap-2 mt-2'>
                {item.badges.map((badge) => (
                  <Badge className="badges" key={badge}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
