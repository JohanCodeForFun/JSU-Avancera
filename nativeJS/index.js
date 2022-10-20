let h1 = document.createElement('H1');
let textNode = document.createTextNode("Hello World!");
document.body.appendChild(h1);
h1.appendChild(textNode);
// body > h1:nth-child(6)