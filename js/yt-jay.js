/*
<iframe
  width="1349"
  height="480"
  src="https://www.youtube.com/embed/qk4hG_3IRG8"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>;





*/

document.oncontextmenu = preventDefaultAcrions;

function preventDefaultAcrions(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault()
    alert("Not Allowed !!");
  } else {
    event.returnValue = false
  }
}