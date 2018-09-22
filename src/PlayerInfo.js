import React, { Component } from 'react';
import './PlayerInfo.css';

class PlayerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let scoreInfo =  "Your Score:" + this.props.score;
        let turnInfo = this.props.turns % 2 == this.props.player ? "my-turn" : "not-my-turn";
        let myTurnText = "My Turn";
        let playerInfo = "Player " + (this.props.player + 1);
        return (
        <div className="player-info">
            <div className="player-index">
                {playerInfo}
            </div>
            <div className="score">
                {scoreInfo}
            </div>
            <div className={turnInfo}>
                {myTurnText}
            </div>
        </div>
        );
    }
}

export default PlayerInfo;
