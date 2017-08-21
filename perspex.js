console.log("Starting Perspex.js");

var svgContainer = document.getElementById("perspex-container-2");

var svgElement = document.createElement("svg");
svgElement.setAttribute("width","100%");
svgElement.setAttribute("height","100%");

var rect = document.createElement("rect");
rect.setAttribute("x","20");
rect.setAttribute("y","20");
rect.setAttribute("width","20");
rect.setAttribute("height","100");
rect.setAttribute("class","stripe2");

svgElement.appendChild(rect);

svgContainer.appendChild(svgElement);

//--------------------------------------------------------
const xmlNS = "http://www.w3.org/2000/svg";
let boxWidth = 300;
let boxHeight = 300;

let svgElem = document.createElementNS (xmlNS, "svg");
svgElem.setAttributeNS (null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
svgElem.setAttributeNS (null, "width", boxWidth);
svgElem.setAttributeNS (null, "height", boxHeight);
svgElem.style.display = "block";
