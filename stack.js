console.log("Starting stack.js");

var xmlns = "http://www.w3.org/2000/svg";
var boxWidth = 300;
var boxHeight = 300;

var svgElem = document.createElementNS (xmlns, "svg");
svgElem.setAttributeNS (null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
svgElem.setAttributeNS (null, "width", boxWidth);
svgElem.setAttributeNS (null, "height", boxHeight);
svgElem.style.display = "block";

var g = document.createElementNS (xmlns, "g");
svgElem.appendChild (g);
g.setAttributeNS (null, 'transform', 'matrix(1,0,0,-1,0,300)');

    // draw linear gradient
var defs = document.createElementNS (xmlns, "defs");
var grad = document.createElementNS (xmlns, "linearGradient");
grad.setAttributeNS (null, "id", "gradient");
grad.setAttributeNS (null, "x1", "0%");
grad.setAttributeNS (null, "x2", "0%");
grad.setAttributeNS (null, "y1", "100%");
grad.setAttributeNS (null, "y2", "0%");
var stopTop = document.createElementNS (xmlns, "stop");
stopTop.setAttributeNS (null, "offset", "0%");
stopTop.setAttributeNS (null, "stop-color", "#ff0000");
grad.appendChild (stopTop);

var stopBottom = document.createElementNS (xmlns, "stop");
stopBottom.setAttributeNS (null, "offset", "100%");
stopBottom.setAttributeNS (null, "stop-color", "#0000ff");
grad.appendChild (stopBottom);
defs.appendChild (grad);
g.appendChild (defs);

    // draw borders
var coords = "M 0, 0";
coords += " l 0, 300";
coords += " l 300, 0";
coords += " l 0, -300";
coords += " l -300, 0";

var path = document.createElementNS (xmlns, "path");
path.setAttributeNS (null, 'stroke', "#000000");
path.setAttributeNS (null, 'stroke-width', 10);
path.setAttributeNS (null, 'stroke-linejoin', "round");
path.setAttributeNS (null, 'd', coords);
path.setAttributeNS (null, 'fill', "url(#gradient)");
path.setAttributeNS (null, 'opacity', 1.0);
g.appendChild (path);

var svgContainer = document.getElementById ("perspex-container-2");
svgContainer.appendChild (svgElem);
