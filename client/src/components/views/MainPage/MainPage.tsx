
import Home from "../Home/Home";
import { ContainerProps } from 'react-bootstrap';

import styles from './MainPage.module.scss';
import Navigation from "../Navigation/Navigation";

const MainPage = ({children}: ContainerProps) => {
  return (
    <>
    <div className={styles.root}>
      <Navigation offert={false}/>
    </div>
      <Home/>
    </>
  )
};

export default MainPage;