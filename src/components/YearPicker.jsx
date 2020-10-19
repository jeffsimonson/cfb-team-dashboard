import React from "react";

import { Select, FormControl } from "@material-ui/core";
import styles from "../css/TeamPicker.module.css";

const YearPicker = ({ handleYearChange, Team, Venues }) => {
  let currentYear = new Date().getFullYear();
  let optionYears = [];
  let computedYear = 0;

  for (let i = 0; i < 15; i++) {
    computedYear = currentYear - i;
    optionYears.push(
      <option Key={i} value={computedYear}>
        {computedYear}
      </option>
    );
  }

  return (
    <FormControl variant="outlined" className={styles.FormControl}>
      <Select
        defaultValue={currentYear}
        onChange={(e) => handleYearChange(e.target.value, Team, Venues)}
      >
        {optionYears}
      </Select>
    </FormControl>
  );
};

export default YearPicker;
