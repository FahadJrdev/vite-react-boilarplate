import {
  Agent,
  FAQ,
  Hash,
  Home,
  Luggage,
  Settings,
  Speaker,
  Stall,
  Times,
  User,
} from '../../assets/icons/icons';
import Download from '../../assets/images/download.png';
import styles from './Sidemenu.module.css';
const SideMenu = ({ isMenuVisible, toggleMenu }) => {
  // Data for menu loop *************

  const menuOptions = [
    {
      optionName: 'Página Inicial',
      link: '#',
      id: 1,
      icon: <Home />,
    },
    {
      optionName: 'Empresas',
      link: '#',
      id: 2,
      icon: <Stall />,
    },
    {
      optionName: 'Anúncios',
      link: '#',
      id: 3,
      icon: <Speaker />,
    },
    {
      optionName: 'Destinos Turísticos',
      link: '#',
      id: 4,
      icon: <Luggage />,
    },
    {
      optionName: 'Palavras-chave',
      link: '#',
      id: 9,
      icon: <Hash />,
    },
    {
      optionName: 'Usuários',
      link: '#',
      id: 5,
      icon: <User />,
    },
    {
      optionName: 'FAQ',
      link: '#',
      id: 6,
      icon: <FAQ />,
    },
    {
      optionName: 'SAC',
      link: '#',
      id: 7,
      icon: <Agent />,
    },
    {
      optionName: 'Configurações Gerais',
      link: '/',
      id: 8,
      icon: <Settings />,
    },
  ];

  // Data for menu loop *************

  const currentUrl = window.location.pathname;

  return (
    <>
      <div
        className={`${styles.menuBarDark} ${!isMenuVisible && styles.hidden}`}
      >
        <div className={`flex justify-end p-4`} onClick={toggleMenu}>
          <Times />
        </div>
        <div className={styles.head}>
          <img
            className={styles.logo}
            src={Download}
            alt="logo"
          />
          <div className={styles.title}>
            <p>turismo</p>
            <p>inteligente</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.menu}>
            {menuOptions.map((option) => (
              <a
                key={option.id}
                href={option.link}
                className={`${
                  option.link === currentUrl ? styles.active : ''
                } ${styles.menuButtons}`}
              >
                {option.icon}
                {option.optionName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
