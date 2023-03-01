import styles from  './Contact.module.scss';
import Container from '../../features/Container/Container';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.root_container}>
          <div className={styles.root_container_contactFooter}>
            <h4>MS-PRO Marek Szczepanek</h4>
            <h4>93-640 Łódź</h4>
            <h4>Ul. Czternastu Straconych 34L</h4>
          </div>
          <div className={styles.root_container_contactSocial}>
            <a href='https://www.facebook.com/profile.php?id=100085400524786' rel="noreferrer" target={'_blank'}><BsFacebook/> FACEBOOK</a>
            <a href='https://www.instagram.com/schody_ms_/?igshid=ZDdkNTZiNTM' rel="noreferrer" target={'_blank'}><BsInstagram/> INSTAGRAM</a>
            <a href='tel:791806594'>TEL: +48 791 806 594</a>
            <a href='mailto:mspro.lodz@gmail.com'>MSPRO.LODZ@GMAIL.COM</a>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
};

export default Contact;