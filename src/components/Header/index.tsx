import { FiSun, FiMoon } from "react-icons/fi";

import styles from "./styles.module.scss";
type Props = {};

const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <nav>
          <ul>
            <li>
              <button className={styles.selected}>Ínicio</button>
            </li>
            <li>
              <button>Projetos</button>
            </li>
            <li>
              <button>Habilidades</button>
            </li>
            <li>
              <button>Sobre</button>
            </li>
          </ul>

          <button className={styles.changeThemeButton}>
            <FiSun size={16} color="#000" />
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
