import React from "react";
import styles from "../css/InfoBox.module.css";

const InfoBox = (props) => {
  return <section className={styles.infoBox}>{props.children}</section>;
};

export default InfoBox;
