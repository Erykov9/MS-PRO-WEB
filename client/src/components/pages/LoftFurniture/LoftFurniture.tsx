import styles from './LoftFurniture.module.scss';
import { AiOutlineSmallDash } from 'react-icons/ai';
import './LoftFurniture.scss';

import ImageGallery from  'react-image-gallery';
import Contact from '../../views/Contact/Contact';

const images = [
  {
    original: 'uploads/loft/balustrada_0.jpg',
    thumbnail: 'uploads/loft/balustrada_0.jpg',
  },
  {
    original: 'uploads/loft/balustrada_1.jpg',
    thumbnail: 'uploads/loft/balustrada_1.jpg',
  },
  {
    original: 'uploads/loft/balustrada_3.jpg',
    thumbnail: 'uploads/loft/balustrada_3.jpg',
  }
];

const LoftFurniture = () => {
  return  (
    <>
      <div className={styles.root}>
        <div className={styles.root_content}>
          <h2>BALUSTRADY/MEBLE LOFT</h2>
          <h2><AiOutlineSmallDash/></h2>
          <p>&emsp;<span>P</span>rodukujemy najwyższej jakości balustrady wewnętrzne, zewnętrzne oraz meble loft.
            Każdy z produktów jest lakierowany
            proszkowo na dowolny kolor.
            Balustrady zewnętrze są uprzednio
            cynkowane co zapewnia najwyższą
            trwałość powłoki. Cynkowanie
            powoduje, że nawet jeżeli
            zarysujemy lakier to nie pojawią się
            ogniska korozji.</p>
        </div>
        <div className={styles.root_gallery}>
        <ImageGallery items={images} />
        </div>
      </div>
      <Contact/>
    </>
  )
};

export default LoftFurniture;