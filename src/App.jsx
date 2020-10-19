import React from "react";

import TeamPicker from "./components/TeamPicker";
import YearPicker from "./components/YearPicker";
import Dashboard from "./components/Dashboard";
import styles from "./css/App.module.css";
import { fetchCollegeFootballData} from "./collegeFootballAPI";

class APP extends React.Component {

  handleTeamChange = this.handleTeamChange.bind(this);
  handleYearChange = this.handleYearChange.bind(this);
 
  state = {
    Teams: [],
    Venues: [],
    TeamVenue: {},
    SelectedTeam: {},
    SelectedYear: new Date().getFullYear(),
    ShowDashboard: false,
  };

  async componentDidMount() {
    const fetchedTeams = await fetchCollegeFootballData("Teams", "/teams/fbs");
    const fetchedVenues = await fetchCollegeFootballData("Venues", "/venues");
    this.setState({ Teams: fetchedTeams, Venues: fetchedVenues});
  }

      
  async fetchTeamVenue(team, year, Venues)  {
    const currentYear = new Date().getFullYear();
    
    if (year === currentYear) {
      year = year - 1;
    };

    const res = await fetchCollegeFootballData("TeamVenue", `/games?year=${year}&home=${team}`);
    
    let teamVenue = {};
    if (res[0]) {
      const teamVenueID = res[0].venue_id;
      teamVenue = Venues.find(venue => venue.id === teamVenueID)
    }

    return teamVenue;
  };

  async handleTeamChange (team, teamsArray, SelectedYear, Venues)  {
    const fetchedTeam = await teamsArray.find(({ school }) => school === team);
    const fetchedTeamVenue = await this.fetchTeamVenue(fetchedTeam.school, SelectedYear, Venues);
    this.setState({ SelectedTeam: fetchedTeam, TeamVenue:fetchedTeamVenue,  ShowDashboard: true });
  };

  async handleYearChange (year, team, venues)  {
    const fetchedTeamVenue = await this.fetchTeamVenue(team, year, venues);
    this.setState({ SelectedYear: year, TeamVenue:fetchedTeamVenue, ShowDashboard: true });
  };

  render() {

    let dashBoardMarkup = "";

    if (this.state.ShowDashboard) {
      dashBoardMarkup = (
        <Dashboard
          SelectedTeam={this.state.SelectedTeam}
          SelectedYear={this.state.SelectedYear}
          TeamVenue={this.state.TeamVenue}
        />
      );
    }

    return (
      <>
        <section>
          <h1>College Football Team Dashboard</h1>
          <div className={styles.selectionArea}>
            <TeamPicker
              handleTeamChange={this.handleTeamChange}
              Teams={this.state.Teams}
              SelectedYear={this.state.SelectedYear}
              Venues={this.state.Venues}
            />

            <YearPicker 
              handleYearChange={this.handleYearChange} 
              Team={this.state.SelectedTeam.school} 
              Venues={this.state.Venues} />
          </div>
        </section>

        <section>{dashBoardMarkup}</section>
      </>
    );
  }
}

export default APP;
