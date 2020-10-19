import React, { useState, useEffect } from "react";

import Styles from "../css/Games.module.css";

import { fetchCollegeFootballData } from "../collegeFootballAPI";

const Games = ({ SelectedTeam, SelectedYear }) => {
  const [fetchedGames, setFetchedGames] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedGames(
        await fetchCollegeFootballData(
          "Games",
          `/games?year=${SelectedYear}&team=${SelectedTeam.school}`
        )
      );
    };
    fetchAPI();
  }, [SelectedTeam, SelectedYear]);

  function getFormattedDate(gameDateJSON) {
    const gameDate = new Date(gameDateJSON);
    const month = gameDate.getMonth() + 1;
    const day = gameDate.getDate();
    const year = gameDate.getFullYear();
    return month + "/" + day + "/" + year;
  }

  function winLoss(game, Team) {
    let teamResult = "";

    if (game.home_points === game.away_points) return teamResult; // for unplayed game

    if (game.home_team === Team) {
      if (game.home_points > game.away_points) {
        teamResult = "W";
      } else {
        teamResult = "L";
      }
    } else {
      if (game.away_points > game.home_points) {
        teamResult = "W";
      } else {
        teamResult = "L";
      }
    }
    return teamResult;
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Schedule/Results</h2>
      <table className={Styles.games}>
        <caption className={Styles.games}>
          {SelectedYear} Regular Season Results
        </caption>

        <tr>
          <th>Date</th>
          <th>Opponent</th>
          <th>W/L</th>
          <th>Pts</th>
          <th>Opp Pts</th>
        </tr>
        {fetchedGames.map((game) => (
          <tr>
            <td>{getFormattedDate(game.start_date)}</td>
            <td>
              {game.home_team === SelectedTeam.school
                ? game.away_team
                : "@ " + game.home_team}
            </td>
            <td>{winLoss(game, SelectedTeam.school)}</td>
            <td>
              {game.home_team === SelectedTeam.school
                ? game.home_points
                : game.away_points}
            </td>
            <td>
              {game.home_team !== SelectedTeam.school
                ? game.home_points
                : game.away_points}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Games;
