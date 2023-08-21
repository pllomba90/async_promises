let pickUrl = "https://deckofcardsapi.com/api/deck";
let deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

const cardArea = document.getElementById("card_area");
const cardButton = document.getElementById("cardButton");
let deck_id;

function displayCard(URL){
    
    const image = document.createElement("img");
    image.src = URL;
    cardArea.appendChild(image);
}


// function pickACard(){
//         axios.get(`${pickUrl}/${deck_id}/draw/?count=1`)
//             .then(response => {
//                 if (response.data.cards.length > 0) {
//                     let value = response.data.cards[0].value;
//                     let suit = response.data.cards[0].suit;
//                     let URL = response.data.cards[0].image;
//                     console.log(`${value} of ${suit}`);
//                     displayCard(URL);
//                 } else {
//                     console.log("No more cards in the deck.");
//                     cardButton.disabled = true;
//                 }
//             })
//             .catch(err => console.log(err));
//     }

// function initializeDeck() {
//     axios.get(`${deckUrl}`)
//         .then(response => {
//         console.log("Deck initialized.");
//         deck_id = response.data.deck_id;
//         cardButton.disabled = false;})
//             .catch(err => console.log(err));
//     }   



async function initializeDeck() {
    await axios.get(`${deckUrl}`)
        .then(response => {
        console.log("Deck initialized.");
        deck_id = response.data.deck_id;
        cardButton.disabled = false;})
            .catch(err => console.log(err));
    }   


async function pickACard(){
       await axios.get(`${pickUrl}/${deck_id}/draw/?count=1`)
            .then(response => {
                if (response.data.cards.length > 0) {
                    let value = response.data.cards[0].value;
                    let suit = response.data.cards[0].suit;
                    let URL = response.data.cards[0].image;
                    console.log(`${value} of ${suit}`);
                    displayCard(URL);
                } else {
                    console.log("No more cards in the deck.");
                    cardButton.disabled = true;
                }
            })
            .catch(err => console.log(err));
    }

    window.onload = initializeDeck;
    cardButton.addEventListener("click", pickACard);