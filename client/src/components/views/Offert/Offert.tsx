import styles from './Offert.module.scss';
import Button from '../../features/Button/Button';

const Offert = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root_itemContainer}>
        <img src='uploads/stairsquality.jpg' alt='stairs'/>
        <div className={styles.root_itemContainer_content}>
          <h2>JAKOŚĆ</h2>
          <div className={styles.root_itemContainer_content_inside}>
            <p>Nasze produkty wykonywane są z najlepszej jakości tworzyw oraz materiałów.</p>
            {/* <Button text={'OFERTA'} direction={'/offert'}/> */}
          </div>
        </div>
      </div>
      <div className={styles.root_itemContainer}>
        <img src='uploads/experience.jpg' alt='carpenter'/>
        <div className={styles.root_itemContainer_content}>
          <h2>DOŚWIADCZENIE</h2>
          <div className={styles.root_itemContainer_content_inside}>
            <p>Wieloletnie doświadczenie pomaga nam zrozumieć potrzeby klientów oraz wprowadzić je w życie.</p>
            {/* <Button text={'OFERTA'} direction={'/offert'}/> */}
          </div>
        </div>
      </div>
      <div className={styles.root_itemContainer}>
        <img src='uploads/accuracy.jpg' alt='mathematics stuff'/>
        <div className={styles.root_itemContainer_content}>
          <h2>PRECYZJA</h2>
          <div className={styles.root_itemContainer_content_inside}>
            <p>Staranność oraz precyzja wykonania jest dla nas kluczowym aspektem, gdyż za tym w parze idzie Wasze bezpieczeństwo.</p>
            {/* <Button text={'OFERTA'} direction={'/offert'}/> */}
          </div>
        </div>
      </div>
      <div className={styles.root_itemContainer}>
        <img src='uploads/price.jpg' alt='calculator'/>
        <div className={styles.root_itemContainer_content}>
          <h2>KONKURENCYJNE CENY</h2>
          <div className={styles.root_itemContainer_content_inside}>
            <p>Cena do jakości, jaką oferujemy, stawia nasze usługi na wysokim poziomie.</p>
            {/* <Button text={'OFERTA'} direction={'/offert'}/> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Offert;