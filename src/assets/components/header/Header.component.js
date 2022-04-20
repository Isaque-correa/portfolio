import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

function HeaderComponent() {
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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default HeaderComponent;
