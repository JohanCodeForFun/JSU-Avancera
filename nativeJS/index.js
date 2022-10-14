fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  .then(response => response.json())
  .then(data => {
    let content = '';
    
      content += `
      <p class="randomQoute"><em>"${data.en}"</em></p>
      <p class="author"><em>-${data.author}</em></p>
      `;
      document.querySelector("#qoutes").innerHTML = content;

  });