// Your code here



function moveDodgerRight() {
  let dodger = document.getElementById('dodger').style;
  dodger.left = parseInt(dodger.left) + 1 + "px";
}

function moveDodgerLeft() {
  let dodger = document.getElementById('dodger').style;
  dodger.left = parseInt(dodger.left) - 1 + "px";
}
