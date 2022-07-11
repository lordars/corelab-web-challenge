import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface IModalCreateCar {
  title: string;
  children: ReactNode;
}

const ModalCreateCar = (props: IModalCreateCar) => {
  return (
    <div className={styles.Card}>
      <h2>{props.title}</h2>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default ModalCreateCar;
