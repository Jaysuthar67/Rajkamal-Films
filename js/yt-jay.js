document.oncontextmenu = preventDefaultActions;

function preventDefaultActions(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault()
    // alert("Not Allowed !!");
  } else {
    event.returnValue = false
  }
}

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
   return false;
  }
}