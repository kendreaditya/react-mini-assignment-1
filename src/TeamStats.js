import React from 'react';

class TeamStats extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    //if(this.state.error)
    error = () => {
        return (
            <>
            <h4>Please input a valid team name.</h4>
            </>
        )
    }

    displayStats = () => {
        return (
            <>
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.props.team.name}</div>
                    <div className="meta">
                        <span className="category">{this.props.team.conference}</span>
                    </div>
                    <div className="description">
                        <img src={this.props.team.logo} alt="" height="250em"/>
                    </div>
                </div>
                <div className="extra content">
                    <p>Rank: {this.props.team.rank}</p>
                    <p>Wins: {this.props.team.wins}</p>
                    <p>Losses: {this.props.team.losses}</p>
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
            content = this.displayStats()
        }
        return (
                <>
                {content}
                </>
        )
    }
}

export default TeamStats;