import React, { useState, useEffect } from "react";
import Styles from "../css/Standings.module.css";

import { fetchCollegeFootballData } from "../collegeFootballAPI";

const Standings = ({ SelectedTeam, SelectedYear }) => {
  const [fetchedStandings, setFetchedStandings] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedStandings(await fetchCollegeFootballData("Standings", `/records?year=${SelectedYear}`));
    };
    fetchAPI();
  }, [SelectedTeam, SelectedYear]);

  let filteredByConference = [];

  filteredByConference = fetchedStandings
  .filter(standings => standings.conference ===  SelectedTeam.conference)
  .sort((team1, team2) => team2.total.wins - team1.total.wins);

  return (
  <>
  <h2>Conference Standings</h2>
    <table className={Styles.standings}>
    <caption className={Styles.standings}>{SelectedYear} Results</caption>

      <tr>
        <th>Team</th> 
        <th>Wins</th> 
        <th>Losses</th> 
      </tr>
    {filteredByConference.map(team => 
      <tr>
        <td>{team.team}</td>
        <td>{team.total.wins}</td>
        <td>{team.total.losses}</td>
      </tr>
    )}

    </table>

</>
  );

};

export default Standings;
