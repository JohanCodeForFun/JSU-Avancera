const node = document.createElement("li");
const textNode = document.createTextNode("Dennis");
const ol2 = document.querySelector('ol');

node.appendChild(textNode);
ol2.appendChild(node);