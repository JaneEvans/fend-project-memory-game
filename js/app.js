/*
 * Create a list that holds all of your cards
 */
let cardList = $('.card');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Shuffle cards function
function shuffleCards(){
    cardList = shuffle(cardList);
    $('.deck').empty().append(cardList);
}

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

// Click card function
function clickCard(){
    let openedCard, clickedCard, numClick=0;

    $('.card').on('click',function(){
        
        clickedCard = $(this).addClass('open show');
        
        if(!openedCard){
            numClick+=1;
            openedCard=clickedCard;
        }
        else if((openedCard.attr('id')!==clickedCard.attr('id'))){
            numClick+=1;
            if(openedCard.children('i').attr('class') === clickedCard.children('i').attr('class')){
                openedCard.removeClass('open show').addClass('match');
                clickedCard.removeClass('open show').addClass('match');
                numClick-=2;
                openedCard='';
            }
            else{
                
                setTimeout(function(){
                    openedCard.removeClass('open show');
                    clickedCard.removeClass('open show');
                    openedCard='';                    
                },500);
            }
            
        }
        console.log(numClick);
        let moves = 3;
        let star1 = $('.stars').children('li').first();
        let star2 = star1.next();

        if(numClick > 4){
            star1.hide();
            moves -=1;
        } 
        
        if (numClick > 12){
            star2.hide();
            moves -=1;
        }        
        
        $('.moves').text(moves);

    });

    
}


// Initialize card deck function
function initializeDeck(){
    // display all of the cards on the page
    $('.card').addClass('open show');
    $('.stars').children('li').show();
    $('.moves').text(3);
    // after 1s close all cards
    setTimeout(function(){
        $('.card').removeClass('open show match');
        clickCard();
    },1000);

    //add event listener on each card: when clicked, open the card
    
}


$(function() {
    shuffleCards();
    initializeDeck();
});

$('.restart').on('click', function(){   
    shuffleCards();
    initializeDeck();
});