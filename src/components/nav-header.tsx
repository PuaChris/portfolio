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
    <header className="sticky top-0 mx-auto max-w-screen-xl h-12 md:px-12 lg:px-24 py-4 bg-dark flex flex-col justify-center items-end">
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
