import React, { useState, useEffect } from "react";

import Styles from "../css/Roster.module.css";
import { fetchCollegeFootballData } from "../collegeFootballAPI";
import {formatHeight, formatHometown } from "../commonFunctions";

    
const Roster = ({ SelectedTeam, SelectedYear }) => {
  const [fetchedRoster, setFetchedRoster] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedRoster(await fetchCollegeFootballData("Roster", `/roster?team=${SelectedTeam.school}&year=${SelectedYear}`))
    };
    fetchAPI();
  }, [SelectedTeam, SelectedYear]);

    
    let activeRoster = [];

    activeRoster = fetchedRoster
    .filter(roster => roster.last_name !==  null)
    .sort((player1, player2) => player1.jersey  - player2.jersey || player1.last_name - player2.last_name);

    return ( 
   
      <section className={Styles.container}>
        <h2 className={Styles.Roster}>Player Roster</h2>
        <table className={Styles.Roster}>
          <caption className={Styles.Roster} >{SelectedYear} Team</caption>
      
            <tr>
              <th className={Styles.stickyHeader}>Nbr</th> 
              <th className={Styles.stickyHeader}>Player</th> 
              <th className={Styles.stickyHeader}>Pos</th> 
              <th className={Styles.stickyHeader}>Height</th> 
              <th className={Styles.stickyHeader}>Weight</th> 
              <th className={Styles.stickyHeader}>Year</th> 
              <th className={Styles.stickyHeader}>Hometown</th> 
            </tr>
          {activeRoster.map(player => 
            <tr>
              <td>{player.jersey}</td>
              <td>{player.first_name +  " " + player.last_name}</td>
              <td>{player.position}</td>
              <td>{formatHeight(player.height)}</td>
              <td>{player.weight}</td>
              <td>{player.year}</td>
              <td>{formatHometown(player.home_city, player.home_state, player.home_country)}</td>
            </tr>
          )}
      
        </table>
      </section>

     );
}
 
export default Roster;