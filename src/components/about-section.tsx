'use client';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function AboutSection() {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText('chrisatpua@gmail.com');
  };

  return (
    <div>
      <div id="name" className="flex flex-col gap-3">
        <h1 className="text-6xl font-bold">Chris Pua</h1>
        <h2 className="text-lg font-medium">
          Front-end Software Engineer | Toronto, ON
        </h2>
        <p className="about-text">
          Having 4+ years of software development experience and strong
          fundamentals in front-end technologies, I love building scalable web
          infrastructure and making websites fast.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/PuaChris"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/christopher-pua"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </Link>
          <Popover>
            <PopoverTrigger onClick={copyToClipboard}>
              <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </PopoverTrigger>
            <PopoverContent side="right">
              Copied!{' '}
              <FontAwesomeIcon
                className="text-green-400"
                icon={faCheckCircle}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <h3 className="mt-8">About</h3>
      <p className="about-text">
        I&apos;m currently a full-stack engineer at{' '}
        <a
          className="font-semibold hyperlink"
          href="https://www.slalombuild.com/"
        >
          Slalom Build
        </a>{' '}
        for 3+ years now where my work varies from building applications from
        scratch to enterprise-scale products. I&apos;ve had the privilege of
        working with clients in industries including relocation services,
        healthcare, real-estate, and government. <br /> <br />
        Before I started working at Slalom Build, I graduated at{' '}
        <a className="font-semibold hyperlink" href="https://www.utoronto.ca/">
          University of Toronto
        </a>{' '}
        in 2021 with a degree in Computer Engineering and an certificate in AI.
        For my craft, I&apos;m super interested building high-performant
        applications with excellent user experiences and working with modern
        technologies.{' '}
      </p>
    </div>
  );
}
