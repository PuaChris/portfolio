import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const NAV_LINKS = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "experience",
    href: "#experience",
  },
  {
    title: "projects",
    href: "#projects",
  },
];
const RESUME_LINK = {
  title: "resume",
  href: "/files/Christopher_Pua.pdf",
};

export default function NavHeader() {
  return (
    <header className="sticky top-0 pr-6 md:pr-12 lg:pr-24 xl:pr-72 2xl:pr-96 min-[1700px]:pr-[500px] min-[2000px]:pr-[600px] backdrop-blur mx-auto w-full h-12 flex flex-col justify-center items-end">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                className="nav-links"
              >
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem key={RESUME_LINK.href}>
            <Link
              href={RESUME_LINK.href}
              className='nav-links'
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
            >
              {RESUME_LINK.title}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
