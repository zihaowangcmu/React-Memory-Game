import React, { Component } from 'react';
import './Info.css';
import PlayerInfo from './PlayerInfo';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let score = "Your Score:" + this.props.score;
        let turn = "Your Turn:" + this.props.turns;
        return (
            <div className="players-info-container">
                <PlayerInfo
                    player={0}
                    score={this.props.score1}
                    turns={this.props.turns}
                />
                <PlayerInfo
                    player={1}
                    score={this.props.score2}
                    turns={this.props.turns}
                />
            </div>        
        );
    }
}

export default Info;
