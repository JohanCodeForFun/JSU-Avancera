fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  .then((response) => response.json())
  .then((data) => {
    let content = "";

    content += `
      <p class="randomQuotes"><em>"${data.en}"</em></p>
      <p class="author"><em>-${data.author}</em></p>
      `;
    document.querySelector("#quotes").innerHTML = content;
  });

// FETCH Programming quotess
// How to install:
// 1) Add <div id="quotes"></div> to your index.html.
// 2) Add <script src="programming-quotess.js" defer></script> inside head or body tag.
// 3) Add programming-quotess.js to your main folder.
// 4) Enjoy!
//
// Qoutes from, https://github.com/skolakoda/programming-quotes-api
// Made by Johan Hellberg, JSU22.
