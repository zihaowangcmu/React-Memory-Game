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
The page will be displayed at localhost:3000.
If this port is occupied, a remind will be displayed and check the new port.

# Functions
The following n functions are implemented.

## Radio Choice (Single Correct Answer)
For questions with single correct answer, basic check/uncheck actions and answer verification are implemented.

## Checkbox Choice (Multiple Correct Answers)
For questions with multiple correct answers, basic 
check/uncheck actions and answer verification are 
implemented.

## Responsive Submit Button
The button is set to be disabled if the conditions 
satisfies one of the followings:
1. For questions with single correct answer, the user did not make a selection.
2. For questions with multiple correct answers, the user did not make at least two selections.

## Responsive Options
After an option is selected, the color of the option tag will be changed. This is part can be purely implemented by css. Basically two methods are preferred by myself:
1. Set styles for input & input:active.
2. Set different class names foe the selected & unselected options. Style them respectively.

## Cutscenes
Cutscenes are implemented by ReactCSSTransitionGroup.

# Basic logic
A js file (quizQuestion) is created to store the questions in an array. Check the format and add new questions by extending the array.

The first time the page renders, the first question is displayed. The user give choices, the options and submit button displayed responsively. When submission, a function judge if its correct or not. When it's correct, the next question will be rendered.

When a user reach the last one and complete it, the final page is rendered.

# Some Useful (maybe) Tips
## Known bugs and solutions
### With IOS webview
1. When the page is viewd in ios webview, it is quite slow to respond to the click event. The reason is not sure, probably ios webview do something when the radio/checkbox is clicked. The solution is quite straightforward: if it is slow, use sonmething quickly. So we can simply use div plus additional functions to handle the onclick event and other logic, including exclusive selections. This part is implemented but not commited here, since it is left as an exercise.
2. Also when viewd in ios webview, user can slide the screen when the transition animation is on going, which will cause unexpected blank be displayed, though the page is properly rendered in the end. The solution is to add overflow-x:hidden to BOTH body and html.
3. A common scene on ios is when you click, the device will have a 300ms delay due to the designation of enable zooming. The solution is to use "ontouchstart" instead of "onclick". Notice that on safari, the touch event is not simulated when you inspect. If you want to test on safari, additional works are needed.

### Use ReactCSSTransitionGroup
1. Remember to add a unique key to the elements you want to be displayed with animation. Even only one element.
2. Set the transition time on both css files and js files.
3. Place the "transition: xxx  yyyms;" in "active" classes.

# At Last
Many pieces of code and the logic is able to be optimized. I am still trying to do better. All are welcomed to communicate!

# Things to Mention

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

