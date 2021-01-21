import React from 'react';

class TeamStats extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {content: null}
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
            <div className="ui content">
                <div>
                    <img src={this.props.team.logo} alt="" height="100em"/>
                </div>
                <div>
                    <h3>{this.props.team.name}</h3>
                    <p>{this.props.team.conference}</p>
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
        console.log(this.state.content)
        return (
                <>
                {content}
                </>
        )
    }
}

export default TeamStats;