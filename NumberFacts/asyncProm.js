
let baseUrl = "http://numbersapi.com/";

function displayFactList(listId, fact) {
    const ul = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = fact;
    ul.appendChild(li);
}

// function getRandomFacts(){
// for (let i = 1; i < 5; i++){
//     let randInt = Math.floor(Math.random() * 100) + 1;
//     axios.get(`${baseUrl}${randInt}`)
//     .then(response => displayFactList('randomFactsList', response.data))
//     .catch(err => console.log(err))};
// };

// function getFavoriteFacts(){
//     for (let i = 1; i < 5; i++){
//         axios.get(`${baseUrl}3`)
//         .then(response => displayFactList('favoriteFactsList', response.data))
//         .catch(err => console.log(err));
//     };
// };
// getRandomFacts()
// getFavoriteFacts()

async function getRandomFacts() {
    const requests = [];

    for (let i = 1; i < 5; i++) {
        let randInt = Math.floor(Math.random() * 100) + 1;
        const request = axios.get(`${baseUrl}${randInt}`)
            .then(response => response.data)
            .catch(err => console.log(err));

        requests.push(request);
    }

    await Promise.all(requests)
        .then(factDataArray => {
            for (const factData of factDataArray) {
                displayFactList('randomFactsList', factData);
            }
        })
        .catch(err => console.log(err));
}

async  function getFavoriteFacts() {
    const requests = [];

    for (let i = 1; i < 5; i++) {
        let favInt = 3;
        const request = axios.get(`${baseUrl}${favInt}`)
            .then(response => response.data)
            .catch(err => console.log(err));

        requests.push(request);
    }

    await Promise.all(requests)
        .then(factDataArray => {
            for (const factData of factDataArray) {
                displayFactList('favoriteFactsList', factData);
            }
        })
        .catch(err => console.log(err));
}

getFavoriteFacts();

getRandomFacts();
