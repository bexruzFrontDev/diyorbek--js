let dino = document.querySelector(".dino")
let cactus = document.querySelector(".cactus")
let record = document.querySelector(".record")


function jump(){
    if (dispatchEvent.classList != "jump") {
      dino.classList.add("jump")

      setTimeout(() => {
        dino.classList.remove('jump')
    },500)
}


}






const  funcLive  = setInterval (() => {
  let dinoTepaga = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  )
  let cactusCHapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  )

  if(cactusCHapga > 0 && cactusCHapga < 60 && dinoTepaga >= 150){
    dino.style.animationPlayState="paused"
    cactus.style.animationPlayState="paused"
        alert("GAME OVER")
        window.location.replace("/home.html")
  }
})



document.addEventListener("keydown",() => {
  jump()

  record.innerHTML++
})



