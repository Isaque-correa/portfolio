import { useEffect, useRef, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import options from "../../../service/option.service";
import { motion } from "framer-motion";
function PortfolioComponent() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  useEffect(() => {
    fetch(options.urlPortfolio)
      .then((response) => response.json())
      .then(setData);
  }, []);
  const handleLeft = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRight = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <section>
      <motion.div
        className="portfolio"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0, transition: { duration: 0.1 } }}
      >
        <ReactTypingEffect
          className="portfolio__title"
          text={["Portfólio"]}
          cursor={"_"}
          eraseDelay={100000000}
        />

        <div className="portfolio__cover" ref={carousel}>
          {data.map((item) => {
            const {
              id,
              img,
              iconHml5,
              iconCss3,
              iconJavascript,
              iconJson,
              iconJquery,
              iconScss,
              iconReact,
              iconBootstrap,
              name,
              linkHomePage,
              linkGitHub,
            } = item;
            return (
              <figure key={id}>
                <img className="portfolio__img" src={img} alt="portfolio" />
                <div className="portfolio__icons">
                  <img src={iconHml5} />
                  <img src={iconCss3} />
                  <img src={iconJavascript} />
                  <img src={iconJson} />
                  <img src={iconJquery} />
                  <img src={iconScss} />
                  <img src={iconReact} />
                  <img src={iconBootstrap} />
                </div>

                <figcaption>
                  <h1 className="portfolio__subTitle">{name}</h1>
                  <div className="portfolio__links">
                    <a href={linkHomePage}>Home Page</a>
                    <a href={linkGitHub}>GitHub</a>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="portfolio__buttons">
          <button onClick={handleLeft}>
            <img
              className="portfolio__left"
              src="img/img-icon/icons-arrow.png"
              alt="left"
            />
          </button>
          <button onClick={handleRight}>
            <img
              className="portfolio__right"
              src="img/img-icon/icons-arrow.png"
              alt="right"
            />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default PortfolioComponent;
