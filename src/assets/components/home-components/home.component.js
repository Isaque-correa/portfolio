import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
function HomeComponent() {
  return (
    <section>
      <motion.div
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="home__img">
          <img src="./img/fotoDePerfil.jpg" />
          <div>
            <ReactTypingEffect
              className="home__sub"
              text={["front end"]}
              cursor={"_"}
              eraseDelay={100000000}
            />
            <h2 className="home__title">Isaque Correa</h2>
            <div className="home__contact">
              <h3>contato</h3>
              <div className="home__contactCover">
                <a href="https://www.linkedin.com/in/isaque-correa/">
                  <img src="img/img-icon/icons-linkedin.png" />
                </a>
                <a href="mailto:icorrea.developer@gmail.com">
                  <img src="./img/img-icon/icons-gmail.png" />
                </a>
                <a href="https://github.com/Isaque-correa">
                  <img src="img/img-icon/icons-github.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default HomeComponent;
