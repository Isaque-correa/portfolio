import { useState } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

function HeaderComponent() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <section>
      <div className="header">
        <div className="header__cover">
          <ReactTypingEffect
            className="header__title"
            text={["Icorrea Developer."]}
            cursor={"_"}
            eraseDelay={100000000}
          />
        </div>
        <nav className="header__nav">
          <div className="header__nav__menu" onClick={handleClick}>
            <div className="header__nav__line1"></div>
            <div className="header__nav__line2"></div>
            <div className="header__nav__line3"></div>
          </div>
          <ul
            className={click ? "header__nav__list active" : "header__nav__list"}
          >
            <li onClick={closeMobileMenu}>
              <Link to="/portfolio/">Home</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/portfolio/about">About</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/portfolio/skill">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default HeaderComponent;
