import Container from "../../features/Container/Container";
import About from "../About/About";
import Offert from "../Offert/Offert";
import Contact from "../Contact/Contact";
import { NavLink } from "react-router-dom";

import styles from './Home.module.scss';

const Home = () => {

  return (
    <>
      <Container>
        <div className={styles.root}>
          <div className={styles.root_circleIcons}>
            <div className={styles.root_circleIcons_item}>
              <div className={styles.root_circleIcons_item_container}>
                <div className={styles.root_circleIcons_item_container_text}>
                  <h3>BALUSTRADY</h3>
                </div>
                <div className={styles.root_circleIcons_item_container_img}>
                  <NavLink to={'/loftfurniture'}><img src='/uploads/balustrada.jpg' alt='balustrade'/></NavLink>
                </div>
              </div>
            </div>
            <div className={styles.root_circleIcons_item}>
              <div className={styles.root_circleIcons_item_container}>
                <div className={styles.root_circleIcons_item_container_text}>
                  <h3>SCHODY PÓŁKOWE</h3>
                </div>
                <div className={styles.root_circleIcons_item_container_img}>
                  <NavLink to={'/shelfstairs'}><img src='/uploads/shelfstairs.jpg' alt='shlef stairs'/></NavLink>
                </div>
              </div>
            </div>
            <div className={styles.root_circleIcons_item}>
              <div className={styles.root_circleIcons_item_container}>
                <div className={styles.root_circleIcons_item_container_text}>
                  <h3>MEBLE LOFT</h3>
                </div>
                <div className={styles.root_circleIcons_item_container_img}>
                  <NavLink to={'/shelfstairs'}><img src='/uploads/loftfurniture.jpg' alt='shlef stairs'/></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About/>
      </Container>
      <Offert/>
      <Contact/>
    </>
  );
}; 

export default Home;