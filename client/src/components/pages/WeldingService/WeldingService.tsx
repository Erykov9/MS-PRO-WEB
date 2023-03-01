import styles from './WeldingService.module.scss';

import { AiOutlineSmallDash } from 'react-icons/ai';
import Contact from '../../views/Contact/Contact';

const WeldingService = () => {
  return (
    <>
    <div className={styles.root}>
      <div className={styles.root_content}>
        <h2>USŁUGI SPAWALNICZE/PROTOTYPOWNIA</h2>
        <h2><AiOutlineSmallDash/></h2>
        <p>&emsp;<span>S</span>pawanie stali czarnej metodami
          MIG/MAG, MMA. Posiadamy
          profesjonalne stoły spawalnicze, stoły
          montażowe, piły taśmowe, wiertarki
          stołowe. Ponadto współpracujemy z
          firmami posiadającymi wycinarki
          laserowe.
          <br/><br/>
          Oferujemy podwykonawstwo
          spawalnicze lub spawalniczo-
          montażowe urządzeń.
        </p>
        <img src='uploads/welding/welding.jpg'></img>
      </div>
    </div>
    <Contact/>
  </>
  )
};

export default WeldingService;