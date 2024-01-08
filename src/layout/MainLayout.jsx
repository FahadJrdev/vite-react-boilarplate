import { IoMenu } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import SideMenu from '../sections/sidemenu';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <SideMenu toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
      <div className={`${!isMenuVisible && styles.close} ${styles.container}`}>
        <div className={`${styles.bar} flex`}>
          <IoMenu onClick={toggleMenu} />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
