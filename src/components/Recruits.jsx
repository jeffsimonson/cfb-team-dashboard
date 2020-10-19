import React, { useState, useEffect } from "react";

import Styles from "../css/Recruits.module.css";
import { fetchCollegeFootballData } from "../collegeFootballAPI";
import {formatHeight, formatHometown } from "../commonFunctions";
    
const Recruits = ({ SelectedTeam, SelectedYear }) => {
  const [fetchedRecruits, setFetchedRecruits] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedRecruits(await fetchCollegeFootballData("Recruits", `/recruiting/players?year=${SelectedYear}&team=${SelectedTeam.school}`));
    };
    fetchAPI();
  }, [SelectedTeam, SelectedYear]);

    
    const sortedRecruits = fetchedRecruits
    .sort((recruit1, recruit2) => recruit2.rating  - recruit1.rating);

    return ( 

      <section className={Styles.container}>
          <h2 className={Styles.Recruits}>Recruiting Class</h2>
          <table className={Styles.Recruits}>
          <caption className={Styles.Recruits}>{SelectedYear} Recruits</caption>
      
            <tr>
              <th>Name</th> 
              <th>Pos</th> 
              <th>Stars</th> 
              <th>Rating</th> 
              <th>Height</th> 
              <th>Weight</th> 
              <th>School</th> 
              <th>Hometown</th> 
            </tr>
          {sortedRecruits.map(recruit => 
            <tr>
              <td>{recruit.name}</td>
              <td>{recruit.position}</td>
              <td>{recruit.stars}</td>
              <td>{recruit.rating}</td>
              <td>{formatHeight(recruit.height)}</td>
              <td>{recruit.weight}</td>
              <td>{recruit.school}</td>
              <td>{formatHometown(recruit.city, recruit.stateProvince, recruit.country)}</td>
            </tr>
          )}
       
          </table>
      </section>

     );
}
 
export default Recruits;