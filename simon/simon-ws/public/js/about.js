function getQuote(){
    fetch('https://api.quotable.io/random')
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data)
        const containerEl = document.querySelector('#quote');

        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
    })


}

function getJoke(){
    fetch("https://randomuser.me/api/")
    .then ((response) =>  (response.json()))
    .then (data => {
        const containerEl = document.getElementById('api2');
        let picUrl = data.results[0].picture.large;
        containerEl.innerHTML = "<img src=\'"  + picUrl + "\'>";
    })

}

getQuote();
getJoke();