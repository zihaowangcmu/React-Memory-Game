import React, { Component } from 'react';
import "./Card.css";    

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.setOnClick = this.props.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setOnClick(this.props.id, this.props.pairId, this.props.flipped);
    }

    render() {
        let imageSrc = this.props.flipped ? 
            this.props.frontImage : this.props.backImage;
        return (
            <img className="image" onClick={this.handleOnClick} src={imageSrc} />
        );
    }
}

export default Card;
