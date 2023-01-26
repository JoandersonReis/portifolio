import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

const Button = ({ title, icon, ...rest }: Props) => {
  return (
    <button className={styles.button} {...rest}>
      {title} {icon}
    </button>
  );
};

export default Button;
