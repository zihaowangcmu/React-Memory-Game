import React, { Component } from 'react';
import Card from './Card';
import Congratulation from './Congratulation';
import Info from './Info';
import Welcome from './Welcome';
import Replay from './Replay';

import "./Game.css";

// Card front images
import card1 from "./images/1.png";
import card2 from "./images/2.png";
import card3 from "./images/3.png";
import card4 from "./images/4.png";
import card5 from "./images/5.png";
import card6 from "./images/6.png";
import card7 from "./images/7.png";
import card8 from "./images/8.png";
import card9 from "./images/9.png";
import card10 from "./images/10.png";
import card11 from "./images/11.png";
import card12 from "./images/12.png";
import card13 from "./images/13.png";
import card14 from "./images/14.png";
import card15 from "./images/15.png";
import card16 from "./images/16.png";
import card17 from "./images/17.png";
import card18 from "./images/18.png";
// 5 card back images
import back1 from "./images/back1.png";
import back2 from "./images/back2.png";
import back3 from "./images/back3.png";
import back4 from "./images/back4.png";
import back5 from "./images/back5.png";

var MAX_PAIRS = 18;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score1: 0,
            score2: 0,
            turns: 0,
            // the id of the first clicked card in one turn
            card1: -1,
            // the id of the second clicked card in one turn
            card2: -1,
            // the pairId of the first clicked card in one turn
            pairId1: -1,
            // the pairId of the second clicked card in one turn
            pairId2: -1,
            clicks: 0,
            // pairs should be less than MAX_PAIRS
            pairs: 18,
            // Total number of card back images 
            backImagesNums: 5,
            stateArr: [],
            pairIds: [],
            images: [],
            backImages: [],
            backImageIndex: 0,
        }

        this.generateFlipStateArr = this.generateFlipStateArr.bind(this);
        this.generatePairIds = this.generatePairIds.bind(this);
        this.generateImages = this.generateImages.bind(this);
        this.generateBackImages = this.generateBackImages.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.handleOnFlipped = this.handleOnFlipped.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.flip = this.flip.bind(this);
        this.flipBack = this.flipBack.bind(this);
        this.renderInfoPage = this.renderInfoPage.bind(this);
        this.renderWelcomePage = this.renderWelcomePage.bind(this);
        this.renderCompletePage = this.renderCompletePage.bind(this);
        this.setPairs = this.setPairs.bind(this);
        this.replay = this.replay.bind(this);
    }

    componentWillMount() {
        this.setState({
            stateArr: this.generateFlipStateArr(this.state.pairs),
            pairIds: this.generatePairIds(this.state.pairs),
            images: this.generateImages(this.state.pairs),
            backImages: this.generateBackImages(),
            backImageIndex: Math.floor(Math.random() * 10) % 5,
        })
    }

    generateFlipStateArr(nums) {
        // The array that stores the initial flipping state, all false
        let FlipStateArr = [];
        for (let i = 0; i < nums; i++) {
            FlipStateArr.push(false);
            FlipStateArr.push(false);
        }

        return FlipStateArr;
    }

    generatePairIds(nums) {
        // The array represents the pair id of this card.
        // N pairs for 2*N cards 
        let pairIds = [];

        for (let i = 0; i < nums; i++) {
            pairIds.push(i);
            pairIds.push(i);
        }

        // Shuffle the array to randomize it
        let index;
        for (let i = 1; i < nums * 2; i++) {
            // Random int 0-100
            index = Math.floor(Math.random() * 101) % nums;
            // Swap the selected 2 elements
            let tmp = pairIds[i];
            pairIds[i] = pairIds[index];
            pairIds[index] = tmp;
        }

        return pairIds;
    }

    generateImages(nums) {
        // The array that stores all the front side pictures
        let imagesArr = [card1, card2, card3, card4, card5, card6, 
            card7, card8, card9, card10, card11, card12, 
            card13, card14, card15, card16, card17, card18];
        return imagesArr;
    }

    generateBackImages() {
        let imagesArr = [back1, back2, back3, back4, back5];
        return imagesArr;
    }

    renderCard(item, key) {
        return (
            <div className='card' key={"card" + key}>
                <Card
                    id={key}
                    pairId={item}
                    frontImage={this.state.images[item]}
                    backImage={this.state.backImages[this.state.backImageIndex]}
                    flipped={this.state.stateArr[key]}
                    handleOnClick={this.handleOnClick}
                />
            </div>  
        )
    }

    handleOnFlipped(card1, pairId1, card2 ,pairId2) {
        if (pairId1 != pairId2) {
            setTimeout(function() {
                this.flipBack(card1);
                this.flipBack(card2); 
            }.bind(this), 1000);
        } else {
            if (this.state.turns % 2 == 0) {
                this.setState({
                    score2: this.state.score2 + 1,
                })
            } else {
                this.setState({
                    score1: this.state.score1 + 1,
                })
            }
        }
        // Set card1, card2 back to -1
        this.setState({
            card1: -1,
            card2: -1,
            pairId1: -1,
            pairId2: -1,
        })
    }

    flip(id) {
        let arr = this.state.stateArr;
        arr[id] = true;
        this.setState({
            stateArr: arr,
        }, () => {
            if (this.state.card1 != -1 && this.state.card2 != -1) {
                this.handleOnFlipped(this.state.card1, this.state.pairId1, this.state.card2, this.state.pairId2);
            }
        })
    }

    flipBack(id) {
        let arr = this.state.stateArr;
        arr[id] = false;
        this.setState({
            stateArr: arr,
        })
    }

    handleOnClick(id, pairId, flipped) {
        if (!flipped) {
            let clicks = this.state.clicks;
            let turns = this.state.turns;
            clicks++;
            // After click, decide whether to increase the turn,
            // and if this clicks on the second card in the turn.
            if (clicks % 2 == 0) {
                turns++;
                this.setState({
                    card2: id,
                    pairId2: pairId,
                    clicks: clicks,
                    turns: turns,
                }, () => {
                    this.flip(id);
                })
            } else {
                this.setState({
                    card1: id,
                    pairId1: pairId,
                    clicks: clicks,
                    turns: turns,
                }, () => {
                    this.flip(id);
                })
            }
        }
    }

    renderInfoPage() {
        return (
            <Info
                score1={this.state.score1}
                score2={this.state.score2}
                turns={this.state.turns}
            />
        )
    }

    renderCompletePage() {
        return (
            <Congratulation
                score1={this.state.score1}
                score2={this.state.score2}
            />
        )
    }

    renderWelcomePage() {
        return (
            <Welcome/>
        )
    }

    setPairs(event) {
        // make sure the input is a integer
        let num = +event.target.value;
        if (isNaN(num)) {
            alert("Please choose an integer between 1 and " + MAX_PAIRS + ".");
            event.preventDefault();
        } else {
            this.setState({
                pairs: +event.target.value,
            })
        }
    }

    replay(event) {
        let num = this.state.pairs;
        // make sure the input is in the desired range
        if (num <= 0 || num > MAX_PAIRS) {
            alert("Please choose an integer between 1 and " + MAX_PAIRS + ".");
            event.preventDefault();
        } else {
            this.setState({
                welcome: "Welcome to Memory Game!",
                score1: 0,
                score2: 0,
                turns: 0,
                card1: -1,
                card2: -1,
                pairId1: -1,
                pairId2: -1,
                pairs: this.state.pairs,
                clicks: 0,
                stateArr: this.generateFlipStateArr(this.state.pairs),
                pairIds: this.generatePairIds(this.state.pairs),
                images: this.generateImages(this.state.pairs),
                backImages: this.generateBackImages(),
                // Assume the backImagesNums is small than 10
                // Else the '10' should be replaced.
                // A general way is to set a really big number like 1000
                // which ensures it is larger than the backImagesNums.
                backImageIndex: Math.floor(Math.random() * 10) % this.state.backImagesNums,
            })
            event.preventDefault();
        }

    }

    render() {
        let pairIds = this.state.pairIds;
        let welcome = (this.state.score1 + this.state.score2 == this.state.pairs && this.state.pairs != 0) ?
             this.renderCompletePage() : this.renderWelcomePage();
        let info = this.renderInfoPage();
        return(
            <div className="game">
                <div className="info">
                    {welcome}
                    {info}
                    <Replay
                        setPairs={this.setPairs}
                        pairs={this.state.pairs}
                        replay={this.replay}
                    />     
                </div>
                <div className="cards-container">
                    {pairIds.map(this.renderCard)}
                </div>
            </div>
        )
    }
}

export default Game;