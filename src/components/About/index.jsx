import { Link } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Link to='/home'><button className={styles.button}>Back</button></Link>
      </div>
      <div className={styles.background}>
        <div className={styles.text}>
          <h1 className={styles.name}>¡Hola!. Soy <span className={styles.myName}>Ramiro Aduviri</span></h1>
          <p className={styles.description}>
            Quiero invitarte a explorar mis otros trabajos y proyectos. Estoy
            emocionado de compartir mi trabajo y estoy seguro de que {" "}
            <span className={styles.myName}> encontrarás algo interesante y valioso.</span> Pueden encontrar mis trabajos en mi
            sitio web personal o en las plataformas en las que suelo publicar,
            como <a className={styles.link} href="https://github.com/Ramir095">GitHub</a> ó{" "}
            <a className={styles.link} href="https://www.linkedin.com/in/kevin-aduviri-b9b964234/">
              Linkedin
            </a>
            . ¡Espero que disfruten explorando y descubriendo todo lo que tengo
            para compartir!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
