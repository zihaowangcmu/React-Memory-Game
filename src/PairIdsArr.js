// The array represents the pair id of this card.
// N pairs for 2*N cards 
var pairIds = [];
var pairs = 5;

for (let i = 0; i < pairs; i++) {
    pairIds.push(i);
    pairIds.push(i);
}

function shuffle(pairIds) {
    let index;
    for (let i = 1; i < pairs * 2; i++) {
        // Random int 0-100
        index = Math.floor(Math.random() * 101) % pairs;
        swap(i, index);
    }
}

function swap(i, j) {
    let tmp = pairIds[i];
    pairIds[i] = pairIds[j];
    pairIds[j] = tmp;
}

shuffle(pairIds);

export default pairIds;