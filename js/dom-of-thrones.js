var time = 0

function frame(actions) {

  setTimeout(function () {
    actions()
  }, time)

  time += 500

}
function reset() {
  
}
document.addEventListener('DOMContentLoaded', function () {
//scene<sceneNumberHere>()
})
