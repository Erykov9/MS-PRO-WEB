import { AiOutlineSmallDash } from "react-icons/ai";
import styles from  './ShelfStairs.module.scss';
import ImageGallery from 'react-image-gallery';
import Contact from "../../views/Contact/Contact";

const images = [
  {
    original: 'uploads/stairs/stairs1.jpg',
    thumbnail: 'uploads/stairs/stairs1.jpg',
  },
  {
    original: 'uploads/stairs/stairs2.jpg',
    thumbnail: 'uploads/stairs/stairs2.jpg',
  },
  {
    original: 'uploads/stairs/stairs3.jpg',
    thumbnail: 'uploads/stairs/stairs3.jpg',
  },
  {
    original: 'uploads/stairs/stairs4.jpg',
    thumbnail: 'uploads/stairs/stairs4.jpg',
  },
  {
    original: 'uploads/stairs/stairs5.jpg',
    thumbnail: 'uploads/stairs/stairs5.jpg',
  },
  {
    original: 'uploads/stairs/stairs6.jpg',
    thumbnail: 'uploads/stairs/stairs6.jpg',
  },
  {
    original: 'uploads/stairs/stairs7.jpg',
    thumbnail: 'uploads/stairs/stairs7.jpg',
  },
  {
    original: 'uploads/stairs/stairs8.jpg',
    thumbnail: 'uploads/stairs/stairs8.jpg',
  },
  {
    original: 'uploads/stairs/stairs9.jpg',
    thumbnail: 'uploads/stairs/stairs9.jpg',
  },
  {
    original: 'uploads/stairs/stairs10.jpg',
    thumbnail: 'uploads/stairs/stairs10.jpg',
  },
  {
    original: 'uploads/stairs/stairs11.jpg',
    thumbnail: 'uploads/stairs/stairs11.jpg',
  },
  {
    original: 'uploads/stairs/stairs12.jpg',
    thumbnail: 'uploads/stairs/stairs12.jpg',
  },
];

const ShelfStairs = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.root_content}>
          <h2>SCHODY PÓŁKOWE</h2>
          <h2><AiOutlineSmallDash/></h2>
          <p>&emsp;<span>O</span>ferujemy kompleksowe wykonanie schodów
          półkowych. Działamy na terenie całej Polski.
          Schody takie mocuje się do ściany nośnej.
          <br/><br/>
          Prace zwykle dzieli się na 2 etapy: konstrukcja
          stalowa- przed tynkami, drewno- co najmniej
          3 tygodnie po wysuszeniu budynku po
          zakończeniu wszystkich mokrych prac.
          <br/><br/>
          Konstrukcje wykonywane przez nas są
          przebadane i bezpieczne.
          <br/><br/>
          Do wykończenia stopni stosujemy lite drewno
          jesionowe lub dębowe olejowane w
          nowoczesnej technologii LED UV VESTING.
          <br/><br/>
          Wykonujemy również balustrady stalowe lub
          ze szkła hartowanego.
          <br/><br/>
          Jeżeli przegapiłeś moment montażu
          konstrukcji i jesteś już po tynkach- spokojnie
          mamy rozwiązania które pozwolą na montaż
          schodów.
          </p>
        </div>
        <div className={styles.root_gallery}>
          <ImageGallery items={images} />
        </div>
      </div>
      <Contact/>
    </>
  )
};

export  default  ShelfStairs;