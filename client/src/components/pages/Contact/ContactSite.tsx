import styles from './Contact.module.scss';
import Contact from '../../views/Contact/Contact';

const ContactSite = () => {
  return (
    <>
      <div className={styles.root}>
      <img src='logo.jpg'></img>
        <Contact/>
      </div>
    </>
  )
};

export default ContactSite;