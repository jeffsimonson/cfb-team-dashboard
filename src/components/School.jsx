import React, { useState, useEffect } from "react";

import { fetchCollegeFootballData } from "../collegeFootballAPI";

const School = ({ SelectedTeam, SelectedYear, TeamVenue }) => {
  const [fetchedCoach, setFetchedCoach] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCoach(await fetchCollegeFootballData("Coach",`/coaches?team=${SelectedTeam.school}&year=${SelectedYear}`));
    };
    fetchAPI();
  }, [SelectedTeam, SelectedYear]);

  let coachFullName = "";

  if (fetchedCoach[0]) {
    coachFullName = fetchedCoach[0].first_name + " " + fetchedCoach[0].last_name;
  };

  let venueCapacity = "";

  if (TeamVenue.capacity) {
    venueCapacity = TeamVenue.capacity.toLocaleString();
  }

  return (
    <>
      <h2>Team Information</h2>
      <table>
        <tr>
          <td>School:</td>
          <td>{SelectedTeam.school}</td>
        </tr>
        <tr>
          <td>Mascot:</td>
          <td>{SelectedTeam.mascot}</td>
        </tr>
        <tr>
          <td>Conference:</td>
          <td>{SelectedTeam.conference}</td>
        </tr>
        <tr>
          <td>Division:</td>
          <td>{SelectedTeam.division}</td>
        </tr>
        <tr>
          <td>Coach:</td>
          <td>{coachFullName}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>{TeamVenue.city}</td>
        </tr>
        <tr>
          <td>State:</td>
          <td>{TeamVenue.state}</td>
        </tr>
        <tr>
          <td>Venue:</td>
          <td>{TeamVenue.name}</td>
        </tr>

        <tr>
          <td>Capacity:</td>
          <td>{venueCapacity}</td>
        </tr>

        <tr>
          <td>Constructed:</td>
          <td>{TeamVenue.year_constructed}</td>
        </tr>

      </table>
    </>
  );
};

export default School;
