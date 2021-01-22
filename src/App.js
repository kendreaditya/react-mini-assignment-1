import React from 'react';

import SearchBar from './SearchBar'
import TeamStats from './TeamStats'
import data from './data'


class App extends React.Component {

  state = {teams:[{conference: '', name: '', rank: null, wins: null, losses: null, logo: ''}], name: '', error: true}

  setTeam = (name) => {
    this.setState({name: name})

    let teams = (data.filter((team_i)=>team_i.name===name));
    if(teams[0] !== undefined)
    {
      this.setState({teams: teams});
      this.setState({error: false})
    }
    else
      this.setState({error: true})
  }

  predictTeam = (name) => {
    this.setState({name: name})

    let teams = (data.filter((team_i)=>team_i.name.includes(name)));
    if(teams[0] !== undefined)
    {
      this.setState({teams: teams});
      this.setState({error: false})
    }
    else
      this.setState({error: true})
  }

  render () {
      return (
      <div className="ui container" style={{}}>
        <SearchBar onSubmit={this.setTeam} onChange={this.predictTeam}/>
        <TeamStats team={this.state}/>
      </div>
    );
  }
}

export default App;
