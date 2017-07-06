function scene4() {

  // Setup Stage
  var stage = document.querySelector('#stage')
  var kingsLanding = document.querySelector('#kings-landing')
  var kingsLandingImgSrc = kingsLanding.getAttribute('src')
  var stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', kingsLandingImgSrc)
  // Setup Cast
  var varys = document.querySelector('#varys')
  var petyr = document.querySelector('#petry')
  var pycelle = document.querySelector('#pycelle')
  var brownRobe = document.querySelector('#brown-robes')
  var blackLeather = document.querySelector('#black-leather')
  var leatherArmour = document.querySelector('#leather-armour')
  var varysContainer = document.createElement('div')
  var petyrContainer = document.createElement('div')
  var pycelleContainer = document.createElement('div')

  varysContainer.append(varys)
  varysContainer.append(leatherArmour)
  petyrContainer.append(petyr)
  petyrContainer.append(brownRobe)
  pycelleContainer.append(pycelle)
  pycelleContainer.append(blackLeather)

  stage.append(varysContainer)
  stage.append(petyrContainer)
  stage.append(pycelleContainer)

  // Character 1
  varysContainer.style.position = 'absolute'
  varysContainer.style.top = '60%'
  varysContainer.style.left = '25%'
  varysContainer.style.width = '8%'
  varysContainer.style.height = '27%'

  varys.style.position = 'absolute'
  varys.style.width = '43%'
  varys.style.top = '0'
  varys.style.left = '15%'
  leatherArmour.style.position = 'absolute'
  leatherArmour.style.bottom = '0'

  // Character 2
  petyrContainer.style.position = 'absolute'
  petyrContainer.style.top = '50%'
  petyrContainer.style.left = '45%'
  petyrContainer.style.width = '8%'
  petyrContainer.style.height = '28%'

  petyr.style.position = 'absolute'
  petyr.style.width = '55%'
  petyr.style.top = '0'
  petyr.style.left = '23%'
  brownRobe.style.position = 'absolute'
  brownRobe.style.bottom = '0'

  //Character 3
  pycelleContainer.style.position = 'absolute'
  pycelleContainer.style.top = '60%'
  pycelleContainer.style.left = '65%'
  pycelleContainer.style.width = '8%'
  pycelleContainer.style.height = '28%'

  pycelle.style.position = 'absolute'
  pycelle.style.top = '0'
  pycelle.style.width = '50%'
  pycelle.style.left = '26%'
  blackLeather.style.position = 'absolute'
  blackLeather.style.bottom = '0'
  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1
  var oneTop = '60%'
  var oneLeft = '25%'
  var twoTop = '50%'
  var twoLeft = '45%'
  var threeLeft = '65%'



  frame(function() {
    varysContainer.style.top = (parseInt(oneTop) - 5) + '%'
    varysContainer.style.left = (parseInt(oneLeft) + 10) + '%'
    petyrContainer.style.top = (parseInt(twoTop) + 5) + '%'
    petyrContainer.style.left = (parseInt(twoLeft) + 10) + '%'
    pycelleContainer.style.top = (parseInt(oneTop) + 5) + '%'
    pycelleContainer.style.left = (parseInt(threeLeft) - 20) + '%'
  })

  frame(function() {
    varysContainer.style.top = twoTop
    varysContainer.style.left = twoLeft
    petyrContainer.style.top = oneTop
    petyrContainer.style.left = threeLeft
    pycelleContainer.style.top = oneTop
    pycelleContainer.style.left = oneLeft
  })
  frame(function() {
    varysContainer.style.top = (parseInt(twoTop) + 5) + '%'
    varysContainer.style.left = (parseInt(twoLeft) + 10) + '%'
    petyrContainer.style.top = (parseInt(oneTop) + 5) + '%'
    petyrContainer.style.left = (parseInt(threeLeft) - 20) + '%'
    pycelleContainer.style.top = (parseInt(oneTop) - 5) + '%'
    pycelleContainer.style.left = (parseInt(oneLeft) + 10) + '%'
  })
  frame(function() {
    varysContainer.style.top = oneTop
    varysContainer.style.left = threeLeft
    petyrContainer.style.top = oneTop
    petyrContainer.style.left = oneLeft
    pycelleContainer.style.top = twoTop
    pycelleContainer.style.left = twoLeft
  })
  frame(function() {
    varysContainer.style.top = (parseInt(oneTop) + 5) + '%'
    varysContainer.style.left = (parseInt(threeLeft) - 20) + '%'
    petyrContainer.style.top = (parseInt(oneTop) - 5) + '%'
    petyrContainer.style.left = (parseInt(oneLeft) + 10) + '%'
    pycelleContainer.style.top = (parseInt(twoTop) + 5) + '%'
    pycelleContainer.style.left = (parseInt(twoLeft) + 10) + '%'
  })
  frame(function() {
    varysContainer.style.top = oneTop
    varysContainer.style.left = oneLeft
    petyrContainer.style.top = twoTop
    petyrContainer.style.left = twoLeft
    pycelleContainer.style.top = oneTop
    pycelleContainer.style.left = threeLeft
  })
  // Stage direction 2
  frame(function() {
    varysContainer.style.top = "65%"
    varysContainer.style.clip = 'rect(0px,100px,130px,0px)'
    petyrContainer.style.top = "55%"
    petyrContainer.style.clip = 'rect(0px, 100px, 130px, 0px)'
    pycelleContainer.style.top = "65%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 130px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "70%"
    varysContainer.style.clip = 'rect(0px,100px,110px,0px)'
    petyrContainer.style.top = "60%"
    petyrContainer.style.clip = 'rect(0px, 100px, 110px, 0px)'
    pycelleContainer.style.top = "70%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 110px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "75%"
    varysContainer.style.clip = 'rect(0px,100px,90px,0px)'
    petyrContainer.style.top = "65%"
    petyrContainer.style.clip = 'rect(0px, 100px, 90px, 0px)'
    pycelleContainer.style.top = "75%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 90px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "80%"
    varysContainer.style.clip = 'rect(0px,100px,70px,0px)'
    petyrContainer.style.top = "70%"
    petyrContainer.style.clip = 'rect(0px, 100px, 70px, 0px)'
    pycelleContainer.style.top = "80%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 70px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "85%"
    varysContainer.style.clip = 'rect(0px,100px,50px,0px)'
    petyrContainer.style.top = "75%"
    petyrContainer.style.clip = 'rect(0px, 100px, 50px, 0px)'
    pycelleContainer.style.top = "85%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 50px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "90%"
    varysContainer.style.clip = 'rect(0px,100px,30px,0px)'
    petyrContainer.style.top = "80%"
    petyrContainer.style.clip = 'rect(0px, 100px, 30px, 0px)'
    pycelleContainer.style.top = "90%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 30px, 0px)'
  })
  frame(function() {
    varysContainer.style.top = "95%"
    varysContainer.style.clip = 'rect(0px,100px,0px,0px)'
    petyrContainer.style.top = "85%"
    petyrContainer.style.clip = 'rect(0px, 100px, 0px, 0px)'
    pycelleContainer.style.top = "95%"
    pycelleContainer.style.clip = 'rect(0px, 100px, 0px, 0px)'
  })

}
