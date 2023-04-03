function nextQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randomNumber = Math.floor(Math.random() * data.length);
      document.getElementById("quote").innerText = data[randomNumber].text;
      document.getElementById("author").innerText = data[randomNumber].author;
    });
}
