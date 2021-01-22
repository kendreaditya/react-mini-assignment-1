import React from 'react';

import SearchBar from './SearchBar'
import TeamStats from './TeamStats'
import data from './data'


class App extends React.Component {

  state = {conference: '', name: '', rank: null, wins: null, losses: null, logo: '', error: true}

  setTeam = (name) => {
    let team = (data.filter((team_i)=>team_i.name===name)[0]);
    if(team !== undefined)
    {
      this.setState(team);
      this.setState({error: false})
    }
    else
      this.setState({error: true})
  }

  render () {
      return (
      <div className="ui container" style={{}}>
        <SearchBar onSubmit={this.setTeam}/>
        <TeamStats team={this.state}/>
      </div>
    );
  }
}

export default App;
