
let baseUrl = "http://numbersapi.com/";

function displayFactList(listId, fact) {
    const ul = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = fact;
    ul.appendChild(li);
}

function getRandomFacts(){
for (let i = 1; i < 5; i++){
    let randInt = Math.floor(Math.random() * 100) + 1;
    axios.get(`${baseUrl}${randInt}`)
    .then(response => displayFactList('randomFactsList', response.data))
    .catch(err => console.log(err))};
};

function getFavoriteFacts(){
    for (let i = 1; i < 5; i++){
        axios.get(`${baseUrl}3`)
        .then(response => displayFactList('favoriteFactsList', response.data))
        .catch(err => console.log(err));
    };
};
getRandomFacts()
getFavoriteFacts()