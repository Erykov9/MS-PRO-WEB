import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>        
      <p>MS-PRO 2023 &copy; powered by <br/><a href='http://linkedin.com/in/eryk-szczepanek'>Erykov9</a></p>
    </div>
  )
};

export default Footer;