import React, { Component } from 'react';
// import Replay from './Replay';

class Congeatulation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let winner;
        let winnerMessage;
        let message;
        if (this.props.score1 > this.props.score2) {
            winner = 1;
            winnerMessage = "Player " + winner;
            message = "Congratulations! " + winnerMessage + " Wins!";
        } else if (this.props.score1 < this.props.score2) {
            winner = 2;
            winnerMessage = "Player " + winner;
            message = "Congratulations! " + winnerMessage + " Wins!";
        } else {
            message = "Congratulations! You both win!";
        }
        return (
            <div className="welcome">
                <div className="congratulation">
                    {message}
                </div>
                {/* <Replay
                    replay={this.props.replay}
                />           */}
            </div>
        );
    }
}

export default Congeatulation;
