import React, { Component } from 'react';
// import Replay from './Replay';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let welcomeMessage = "Welcome to Card Memory Game!";
        return (
            <div>
                <div className="welcome">
                    {welcomeMessage}
                </div>
                {/* <Replay
                    replay={this.props.replay}
                />                 */}
            </div>
        );
    }
}

export default Welcome;
