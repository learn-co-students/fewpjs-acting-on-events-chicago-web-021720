let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FED123'
dodger.style.bottom = "100px"

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
    else if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
    else if (e.key === "ArrowUp") {
        moveDodgerUp()
    }

})

function moveDodgerLeft() {
    let pixNumH = parseInt(dodger.style.left)
    if (pixNumH > 0) {
        dodger.style.left = `${pixNumH - 1}px`
    }
}

function moveDodgerRight() {
    let pixNumH = parseInt(dodger.style.left)
    if (pixNumH < 360) {
        dodger.style.left = `${pixNumH + 1}px`
    }
}

function moveDodgerUp() {
    let pixNumV = parseInt(dodger.style.bottom)
    if (pixNumV < 380) {
        dodger.style.bottom = `${pixNumV + 1}px`
    }
}

function moveDodgerDown() {
    let pixNumV = parseInt(dodger.style.bottom)
    if (pixNumV > 0) {
        dodger.style.bottom = `${pixNumV - 1}px`
    }
}