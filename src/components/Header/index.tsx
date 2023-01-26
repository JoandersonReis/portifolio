import { FiSun, FiMoon } from "react-icons/fi";

import styles from "./styles.module.scss";

type Props = {
  onSectionSelected: (value: string) => void;
  onThemeSelected: (value: string) => void;
  sectionSelected: string;
  themeSelected: string;
};

const Header = (props: Props) => {
  return (
    <header 
      className={`${styles.header} ${props.themeSelected == "white" && styles.whiteTheme}`}
    >
      <section>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => props.onSectionSelected("home")}
                className={
                  props.sectionSelected == "home" ? styles.selected : undefined
                }
              >
                Ínicio
              </button>
            </li>
            <li>
              <button
                className={
                  props.sectionSelected == "projects"
                    ? styles.selected
                    : undefined
                }
                onClick={() => props.onSectionSelected("projects")}
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                className={
                  props.sectionSelected == "skills"
                    ? styles.selected
                    : undefined
                }
                onClick={() => props.onSectionSelected("skills")}
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                className={
                  props.sectionSelected == "about" ? styles.selected : undefined
                }
                onClick={() => props.onSectionSelected("about")}
              >
                Sobre
              </button>
            </li>
          </ul>

          <button 
            className={styles.changeThemeButton}
            onClick={() => props.onThemeSelected(props.themeSelected == "dark"? "white":"dark")}
          >
            {props.themeSelected == "dark"?
              <FiSun size={16} color="#000" />
              :
              <FiMoon size={16} color="#000" />
            }
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
