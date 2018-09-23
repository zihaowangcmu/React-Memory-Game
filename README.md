# React Memory Game
This is a react Memory Game component coded by Zihao Wang. You are welcome to download and improve.

# How to Run It
Change directory to the desired one and
```
git clone https://github.com/zihaowangcmu/React-Memory-Game.git
cd <the target dir>
npm install
npm start
```
The page will be displayed at localhost:3000 by default.
If this port is occupied, a remind will be displayed and check the new port.

# Functionalities
The following n Functionalities are implemented.

## Basic memory game rules
At start of the game, all cards are back side up. The user can click on the cards to make a guess of match. If the two cards matches, the player will gain 1 point and the cards will stay front side up and unclickable. Else the cards will flipped back. Two clicks makes one turn. When all cards are matched, the game is finished.

## Multiplayer mode
By default, two players are set to play this game. Each player make a guess and the one with more matches win.

## Random Card Back
When a new game starts, the card back is ramdomly set. There are 5 card backs for now. If you would like to add more, simply download them to the images folder and import them in Game.js, then modify the initial state of card back nums and relative array for storing the card backs.

## Random Order of cards
The order of the cards are random, so that each game is unique. 

## Customize Pairs of cards
The default pair number is 18. So there will be 36 cards display in a 6 x 6 grid. You can modify the number of pairs between 0 and 18. Notice that input area can validate your input.

## Replay
To play again, just click 'replay'.

# Future work
I am busy with CMU courses, especially Cloud Computing.... So I didn't make it too visually attrative. To add animation, I would consider CSSTransitionGroup. To make the UI better, there are some UI libraries or I would customize it.

# At Last
Many pieces of code and the logic is able to be optimized. I am still trying to do better. All are welcomed to communicate!

# Things to Mention

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

