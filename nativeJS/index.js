const parent = document.querySelector('ol');
const lastChildNode = parent.children[parent.children.length-1]

const listNode = document.createElement("li");
const textNode = document.createTextNode("Dennis");

parent.appendChild(listNode);
listNode.appendChild(textNode);
parent.insertBefore(listNode, lastChildNode);