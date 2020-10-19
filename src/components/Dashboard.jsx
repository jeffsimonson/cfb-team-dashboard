import React from "react";

import styles from "../css/dashboard.module.css";
import InfoBox from "../components/InfoBox";
import School from "../components/School";
import Standings from "../components/Standings";
import Games from "../components/Games";
import Roster from "../components/Roster";
import Recruits from "../components/Recruits";

const Dashboard = ({ SelectedTeam, SelectedYear, TeamVenue }) => {
  const teamBackgroundColor = {
    backgroundColor: `${SelectedTeam.alt_color}`,
  };

  let teamLogo = [];

  if (SelectedTeam.logos) {
    teamLogo = SelectedTeam.logos[0];
  }

  return (
    <section className={styles.dashboard} style={teamBackgroundColor}>
      <img src={teamLogo} alt="team logo" />

      <InfoBox>
        <School SelectedTeam={SelectedTeam} SelectedYear={SelectedYear} TeamVenue={TeamVenue} />
      </InfoBox>

      <InfoBox>
        <Games SelectedTeam={SelectedTeam} SelectedYear={SelectedYear} />
      </InfoBox>
      
      <InfoBox>
        <Standings SelectedTeam={SelectedTeam} SelectedYear={SelectedYear} />
      </InfoBox>


      <InfoBox>
        <Roster SelectedTeam={SelectedTeam} SelectedYear={SelectedYear} />
      </InfoBox>

      <InfoBox>
        <Recruits SelectedTeam={SelectedTeam} SelectedYear={SelectedYear} />
      </InfoBox>


    </section>
  );
};

export default Dashboard;
