import React from "react";
import { Select, FormControl } from "@material-ui/core";

import styles from "../css/TeamPicker.module.css";

const TeamPicker = ({ handleTeamChange, Teams = [], SelectedYear, Venues }) => {

  return (
    <FormControl variant="outlined" className={styles.FormControl}>
      <Select
        defaultValue="Choose Team"
        onChange={(e) => handleTeamChange(e.target.value, Teams, SelectedYear, Venues)}
      >
        <option value="Choose Team">Choose Team</option>
        {Teams.map((Team, i) => (
          <option key={i} value={Team.school}>
            {Team.school}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default TeamPicker;
