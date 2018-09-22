import React, { Component } from 'react';

class Replay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className="replay" onSubmit={this.props.replay}>
                    <label>
                        How many pairs would you like:
                        <input type="text" value={this.props.pairs} onChange={this.props.setPairs} />
                    </label>
                    <input type="submit" value="Click me to Replay!" />
                </form>             
            </div>
        );
    }
}

export default Replay;
