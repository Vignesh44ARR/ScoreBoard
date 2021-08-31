function popup(n) {
  document.getElementById("ims").src = n;
  document.getElementById("pop").style.visibility = "visible";
  return false;
}

function hid() {
  document.getElementById("pop").style.visibility = "hidden";
  return false;
}
