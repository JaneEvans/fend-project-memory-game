/*
 * Create a list that holds all of your cards
 */
// const cardIDList = []
// for(let i=1;i<=16;i++){
//     cardList.push('c'+i);
// }
const cardList = $('.deck li');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Shuffle cards
function shuffleCards(){
    let newCardList = shuffle(cardList);
    $('.deck').empty().append(newCardList);
} 


// display all of the cards on the page when clicked "restart" button
// after 1s close all cards
$('.restart').click(function(){
    $('.card').removeClass('open show match');
    shuffleCards();
    $('.card').addClass('open show');
    setTimeout(function(){
        $('.card').removeClass('open show match');
    },1000);
});












/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
