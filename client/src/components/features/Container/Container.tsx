import { ContainerProps } from 'react-bootstrap';
import styles from './Container.module.scss';

const Container = ({children}: ContainerProps) => {
  return(
    <div className={styles.root}>
      {children}
    </div>
  )
};

export default Container;