import MotionComponent from "../components/MotionComponent";
import { simpleAnimationVariants } from "../utils/motion";
import { staggerContainer, textVariants } from "../utils/motion";
import './Header.css';
 
const Header = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Login", href: "/login" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <header className="header font-railway mx-auto flex max-w-[84rem] flex-wrap items-center justify-center gap-8 px-8 pt-8 text-base md:justify-between lg:pt-[4.5625rem]">
      <MotionComponent as="a" variants={simpleAnimationVariants} href="#">
        <h1 className="main-heading">DataForge</h1>
      </MotionComponent>
      <nav aria-label="Main">
        <MotionComponent
          as="ul"
          variants={staggerContainer}
          className="nav flex items-center gap-[3.5625rem]"
          role="list"
        >
          {links.map((link, index) => (
            <MotionComponent
              as="li"
              variants={textVariants}
              key={index}
              role="listitem"
            >
              <a href={link.href} className="border-bottom relative">
                {link.name}
              </a>
            </MotionComponent>
          ))}
        </MotionComponent>
      </nav>
    </header>
  );
};

export default Header;
