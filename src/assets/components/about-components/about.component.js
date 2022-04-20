import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
function AboutComponent() {
  return (
    <section>
      <motion.div
        className="about"
        initial={{width:0}}
        animate={{ width: "100%" }}
        exit={{x: window.innerWidth, transition:{duration:0.1}}}
      >
        <div className="about__cover">
          <img src="./img/thumb.png" />
        </div>

        <div className="about__info">
          <div className="about__coverTitle">
            <ReactTypingEffect
              className="about__title"
              text={["About"]}
              cursor={"_"}
              eraseDelay={100000000}
            />
          </div>
          <p>
            Oi!
            <br /> Eu me chamo Isaque dos Santos Correa, sou front-end junior,
            gosto transformar layout em códigos, dando uma vida para algo que
            era apenas uma imagem, leio livros de ficção e didáticos, quando eu
            não tiver programando vou estar jogando xadrez embora eu não seja
            muito bom eu aceito desafios, e por ultimo amo muito jogar video
            games do estilo rpg e mmorpg. <br />
            <br />
            Se você se interessou fique a vontade para verificar meu portfólio.
            <br />
            <br /> Desde já agradeço sua presença aqui!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
export default AboutComponent;
