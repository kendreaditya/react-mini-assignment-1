import React from 'react';

class TeamStats extends React.Component {
    error = () => {
        return (
            <>
            <h4>Please input a valid team name.</h4>
            </>
        )
    }

    displayStats = ({conference, name, rank, wins, losses, logo}) => {
        return (
            <>
            <div className="ui card">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <span className="category">{conference}</span>
                    </div>
                    <div className="description">
                        <img src={logo} alt="" height="250em"/>
                    </div>
                </div>
                <div className="extra content">
                    <p>Rank: <strong>{rank}</strong></p>
                    <p>Wins: <strong>{wins}</strong></p>
                    <p>Losses: <strong>{losses}</strong></p>
                </div>
            </div>
            </>
        )
    }


    // https://reactjs.org/docs/conditional-rendering.html
    render () {
        let content;
        if(this.props.team.error){
            content = this.error()
        }
        else{
            content = this.props.team.teams.map((team_i)=>{
                return this.displayStats(team_i)
            })
        }
        return (
                <>
                {content}
                </>
        )
    }
}

export default TeamStats;