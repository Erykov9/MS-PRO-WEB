import styles  from './OffertView.module.scss';
import Navigation from '../../views/Navigation/Navigation';
import SelfMontage from '../SelfMontage/SelfMontage';
import WeldingService from '../WeldingService/WeldingService';
import ShelfStairs from '../ShelfStairs/ShelfStairs';
import LoftFurniture from '../LoftFurniture/LoftFurniture';
import Home from '../../views/Home/Home';
import ContactSite from '../Contact/ContactSite';

const OffertView = () => {
  console.log(window.location.href.split('/')[3]);
  const currentSite = window.location.href.split('/')[3];

  return (
    <div className={styles.root}>
      <div className={styles.root_nav}>
        <Navigation offert={true}/>
      </div>
      {currentSite === 'loftfurniture' ? <LoftFurniture/> : currentSite === 'weldingservice' ? <WeldingService/> : currentSite === 'selfmontage' ? <SelfMontage/> : currentSite === 'shelfstairs' ? <ShelfStairs/> : currentSite === 'contact' ? <ContactSite/> : <Home/>}
    </div>
  )
};

export default OffertView;