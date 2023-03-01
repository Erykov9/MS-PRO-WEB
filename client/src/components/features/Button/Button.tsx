import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const Button = ({text, direction}: any) => {
  return (
    <div className={styles.root}>
      <NavLink to={`${direction}`}>{text}</NavLink>
    </div>
  )
};

export default Button;