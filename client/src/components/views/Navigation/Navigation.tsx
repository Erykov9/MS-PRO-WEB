import styles from './Navigation.module.scss';

import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import  { AiOutlineDash } from 'react-icons/ai'

import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = ({offert}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: any) => {
    setIsHovered(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <>
      {/* offcanvas menu */}
      <div className={offert === true ? `${styles.root}` : scrollPosition > 99 ? `${styles.root} ${styles.scrolled}`: `${styles.root}` } >
        <div className={styles.root_navItemsSmall}>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div onClick={handleShow}>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
        <Offcanvas show={show} onHide={handleClose} responsive="md">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><h5>Menu</h5></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div><a href={'/'}>STRONA GŁÓWNA</a></div>
            <div><NavLink to={'/contact'}>KONTAKT</NavLink></div>
            <div className={styles.dropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
              <div><span>OFERTA</span></div>
              {isHovered &&
                <div className={styles.dropdown_item}>
                  <NavLink to={'/loftfurniture'}><AiOutlineDash/> BALUSTRADY/MEBLE LOFT</NavLink><br/>
                  <NavLink to={'/shelfstairs'}><AiOutlineDash/> SCHODY PÓŁKOWE</NavLink><br/>
                  <NavLink to={'/weldingservice'}><AiOutlineDash/> USŁUGI SPAWALNICZE/PROTOTYPOWNIA</NavLink><br/>
                  <NavLink to={'/selfmontage'}><AiOutlineDash/> SAMODZIELNY MONTAŻ</NavLink><br/>
                </div>
              }
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        </div>
        <div className={styles.root_navItems}>
          <div><NavLink to={'/'}>STRONA GŁÓWNA</NavLink></div>
          <div><NavLink to={'/contact'}>KONTAKT</NavLink></div>
          <div className={styles.dropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            <div><span id='offert'>OFERTA</span></div>
            {isHovered &&
              <div className={styles.dropdown_item}>
                <NavLink to='/loftfurniture'>BALUSTRADY/MEBLE LOFT</NavLink>
                <NavLink to='/shelfstairs'>SCHODY PÓŁKOWE</NavLink>
                <NavLink to={'/weldingservice'}>USŁUGI SPAWALNICZE/PROTOTYPOWNIA</NavLink>
                <NavLink to={'/selfmontage'}>SAMODZIELNY MONTAŻ</NavLink>
              </div>
            }
          </div>
        </div>
        <div className={styles.root_navBanner}>
          <NavLink to='/'><img src='MS-PRO.png' alt='logo'></img></NavLink>
        </div>
      </div>
    </>
  )
};

export default Navigation;

