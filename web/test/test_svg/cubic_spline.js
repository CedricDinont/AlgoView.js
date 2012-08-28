function CubicSpline() {


}

function onMoveControlPoint() {

}

function init() {
	var group=document.getElementById("cubic_spline");
	group.$x = 0;
	group.$y = 0;
}

function startMovingCubicSpline(evt) {
  group=evt.target.parentNode;
  x1=evt.clientX - group.$x;
  y1=evt.clientY - group.$y;
  group.setAttribute("onmousemove","moveCubicSpline(evt)");
}

function stopMovingCubicSpline(evt) {
  group.setAttributeNS(null, "onmousemove", null);
}

function moveCubicSpline(evt) {
  dx=evt.clientX-x1;
  dy=evt.clientY-y1;
  group.setAttributeNS(null,"transform","translate("+ dx + ", " + dy +")");
  group.$x = dx; 
  group.$y = dy; 
}

