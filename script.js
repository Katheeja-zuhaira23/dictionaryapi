
function synonym() {
  // Get the value of the input field
  let word = document.getElementsByClassName("word")[0].value;

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let synonym = document.getElementsByClassName("synonym")[0]
      synonym.innerHTML = `<div class="card">
        <div class="card-body">
          SYNONYMS: <br><br>${data[0].meanings[0].synonyms}
        </div>
      </div>`
    })

    .catch(error => {
      console.error('error:', error);
    });

}
