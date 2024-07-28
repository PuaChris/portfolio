import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from './ui/badge';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const EXPERIENCE_LIST = [
  {
    timeline: '2021 - PRESENT',
    title: 'Full Stack Software Engineer - Slalom Build',
    link: 'https://www.slalombuild.com/',
    descriptions: [
      'Developed internal social media platform from scratch with two other engineers that drove $5 million in revenue + costs saved, resulting in the launch of two subsequent projects',
      'Designed and built end-to-end features including a custom file manager component that performed CRUD operations to Azure Blob Storage in React, TypeScript and Next.js while enforcing best security practices',
      'Refactored application architecture to optimize load times resulting in an 88% increase in web performance in TypeScript and Redux. Populated existing, untested components with unit tests using the Jest framework',
      'Conducted demo sessions to clients by showcasing value in key features to build trust and gather feedback',
    ],
    badges: [
      'JavaScript',
      'TypeScript',
      'C#',
      'React',
      'Next.js',
      'Azure',
      'Redux',
      'Storybook',
    ],
  },
  {
    timeline: '2019 - 2020',
    title: 'Full Stack Developer - Ceridian Dayforce',
    link: 'https://www.dayforce.com/ca',
    descriptions: [
      'Developed and deployed end-to-end features using C#, JavaScript, SQL and Git on a team of three developers',
      'Implemented new UI authentication features from mocks to prevent embezzlement from payroll employees',
      'Applied API security checks to defend against vulnerability attacks through robust user validation',
    ],
    badges: ['JavaScript', 'C#', 'SQL'],
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
          className="flex flex-col md:grid md:grid-cols-[0.5fr_1.5fr] md:gap-x-6 md: gap-y-8 mt-8"
        >
          {EXPERIENCE_LIST.map((item) => (
            <>
              <div
                id="experiences-dates"
                className="text-sm font-semibold text-grey min-[0px]:max-md:hidden md:visible"
              >
                {item.timeline}
              </div>
              <div className="flex flex-col gap-2">
                <span
                  id="experiences-dates"
                  className="text-sm font-semibold text-grey md:hidden"
                >
                  {item.timeline}
                </span>
                <span className="text-base font-semibold hyperlink flex flex-row items-center gap-2">
                  <a href={item.link}>{item.title}</a>
                  <FontAwesomeIcon
                    className="h-2 w-2"
                    icon={faArrowUpRightFromSquare}
                  />
                </span>
                <ul className="list-disc pl-4">
                  {item.descriptions?.map((desc, index) => (
                    <li key={index} className='pl-4'>
                      <p className="text-base/7">{desc}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row flex-wrap gap-2 mt-2">
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
