import styles from './About.module.scss';

const About = () => {
  return(
    <div className={styles.root}>
      <div className={styles.root_header}>
        <h1>O NAS</h1>
      </div>
      <h4><span>Z</span>ajmujemy się produkcją schodów na
        konstrukcji stalowej, balustrad oraz
        mebli loft. Wykonujemy kompleksowe
        realizacje oraz elementy do
        samodzielnego montażu. Posiadamy
        wieloletnie doświadczenie w obróbce
        metalu i drewna. Działamy na terenie
        całego kraju.
      </h4>
    </div>
  )
};

export default About;