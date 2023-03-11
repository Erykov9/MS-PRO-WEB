import styles from './SelfMontage.module.scss';
import ImageGallery from  'react-image-gallery';
import { AiOutlineSmallDash } from 'react-icons/ai';
import Contact from '../../views/Contact/Contact';
import { useState }  from 'react';
import { Modal } from 'react-bootstrap';

import { RxDotFilled } from 'react-icons/rx'

const images = [
  {
    original: 'uploads/selfmontage/foto1.jpg',
    thumbnail: 'uploads/selfmontage/foto1.jpg',
  },
  {
    original: 'uploads/selfmontage/foto2.jpg',
    thumbnail: 'uploads/selfmontage/foto2.jpg',
  },
  {
    original: 'uploads/selfmontage/foto3.jpg',
    thumbnail: 'uploads/selfmontage/foto3.jpg',
  },
  {
    original: 'uploads/selfmontage/foto4.jpg',
    thumbnail: 'uploads/selfmontage/foto4.jpg',
  },
  {
    original: 'uploads/selfmontage/foto5.jpg',
    thumbnail: 'uploads/selfmontage/foto5.jpg',
  },
  {
    original: 'uploads/selfmontage/foto6.jpg',
    thumbnail: 'uploads/selfmontage/foto6.jpg',
  },
];

const SelfMontage = () => {
  const [ isShow, setIsShow ] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [photo, setPhoto] = useState('');

  const clickHandler = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  }

  const imgModal = (e: any) => {
    e.preventDefault();
    const imgSrc = e.target.src.split('/');
    const imgValue = `${imgSrc[3]}/${imgSrc[4]}/${imgSrc[5]}`;
    setPhoto('');
    setPhoto(imgValue);
    setModalShow(true);
  }
  
  return (
    <>
    <Modal show={modalShow} fullscreen={true} onHide={() => setModalShow(false)}>
      <div className={styles.modalDiv}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><div className={styles.modalDiv_img}>{<img src={photo} alt={photo.split('/')[2]}></img>}</div></Modal.Body>
      </div>
    </Modal>
    <div className={styles.root}>
      <div className={styles.root_content}>
        <h2>SAMODZIELNY MONTAŻ</h2>
        <h2><AiOutlineSmallDash/></h2>
        <div>
          <p>&emsp;<span>O</span>ferujemy stopnie stalowe do wykonania konstrukcji schodów półkowych.
          Stelaże wykonujemy z atestowanej stali, profile zamknięte o ściance 4mm
          zapewniają wysoką sztywność na zginanie oraz skręcanie. Stopie są sztywne i
          bezpieczne. Stosujemy potrójny profil. Konstrukcje dostarczamy zabezpieczone
          podkładem antykorozyjnym.

          Posiadamy w ofercie również nakładki dębowe lub jesionowe.

          Stopnie te montuje się pojedynczo przykręcając je do ściany. Konstrukcję taką
          najlepiej zamontować przed tynkami/ płytami gk. Posiadamy w ofercie także
          zestaw montażowy w postaci płyty stalowej, którą umieszcza się po drugiej
          stronie ściany oraz szpilek, podkładek i nakrętek. Możemy wykonać również stopnie na wspólnym płaskowniku.
          </p>
        </div>
        <div>
          <br/><br/>
          <p>
          <span>Z</span>amówienie odbywa się według schematu:
          <br/><br/>
          <RxDotFilled/> Przysyłasz rzuty pięter/ szkic/ zdjęcia z wymiarami klatki schodowej.
          Wyliczamy ilość stopni, podajemy ich parametry (wysokość x głębokość x
          szerokość).
          <br/>
          <RxDotFilled/> Akceptacja oferty -&gt; zaliczka -&gt; czas produkcji około 10 dni roboczych.
          <br/>
          <RxDotFilled/> Wysyłka razem z instrukcją montażu pod wskazany adres.
          <br/><br/>
          <span>Ś</span>ciana do której można zamocować stopnie musi mieć grubość co najmniej:
          <br/><br/>
          <RxDotFilled/> Materiały typu pustak ceramiczny, silikat, gazobeton- 24cm - w tym
          przypadku konieczne jest przewiercenie ściany na wylot i zastosowanie po
          drugiej stronie podkładek lub płyty o dużej powierzchni które zmniejszą
          nacisk jednostkowy na ścianę. Posiadamy w ofercie również płyty
          montażowe z otworami pokrywającymi się z tymi w stopniach.
          <br/><br/>
          <RxDotFilled/> Żelbet- 18cm- w tym przypadku możemy zamocować stopnień przy pomocy
          kotwy chemicznej. Głębokość zakotwienia wg zaleceń producenta kotwy.
          <br/><br/>
          <RxDotFilled/> Bloczek fundamentowy- 24cm- jest to najbardziej optymalne rozwiązanie.
          W materiale tym można również jak w przypadku żelbetu zamocować
          stopnie przy pomocy kotwy chemicznej. Ma on jednak tą zaletę, że jest
          łatwiejszy do wiercenia- nie ma ryzyka natrafienia na pręty zbrojeniowe. W
          takiej ścianie można również wykonać bruzdy pod stopnie aby zakrycie
          elementów konstrukcji było łatwiejsze.
          </p>
          <div className={styles.root_content_imgContainer}>
            <div className={styles.root_content_imgContainer_instr}>
              <img src='uploads/selfmontage/instruction.jpg' alt='instruction' onClick={imgModal}></img>
              <img src='uploads/selfmontage/step50.jpg' alt='step50' onClick={imgModal}></img>
            </div>
          </div>
        </div>
        
        <div className={styles.root_pricelist}>
          <h2>Cennik</h2>
          <h2><AiOutlineSmallDash/></h2>
          <div className={styles.root_content_imgContainer}>
            <div> 
              <h3>PODEST/SPOCZNIK</h3>
              <h4>800-1000,-</h4>
            </div>
            <div>
              <img src='uploads/selfmontage/foto1.jpg' alt='foto1' onClick={imgModal}></img>
            </div>
          </div>
          <div className={styles.root_line}></div>
          <div className={styles.root_content_imgContainer}>
            <div> 
              <h3>STOPIEŃ ZABIEGOWY</h3>
              <h4>520,-</h4>
            </div>
            <div>
              <img src='uploads/selfmontage/foto3.jpg' alt='foto1' onClick={imgModal}></img>
              <img src='uploads/selfmontage/foto4.jpg' alt='foto1' onClick={imgModal}></img>
            </div>
          </div>
          <div className={styles.root_line}></div>
          <div className={styles.root_content_imgContainer}>
            <div> 
              <h3>PŁYTA MONTAŻOWA</h3>
              <h4>40,-/szt.</h4>
            </div>
            <div>
              <img src='uploads/selfmontage/foto5.jpg' alt='foto1' onClick={imgModal}></img>
            </div>
          </div>
          <div className={styles.root_line}></div>
          <div className={styles.root_content_imgContainer}>
            <div> 
              <h3>STOPIEŃ PROSTY</h3>
              <h4>400,-</h4>
            </div>
            <div>
              <img src='uploads/selfmontage/foto6.jpg' alt='foto1' onClick={imgModal}></img>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Contact/>
  </>
  )
};

export default SelfMontage;