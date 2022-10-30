document.getElementById('hider').onclick = function() {
    document.getElementById('hider').style.display = "none";
    document.getElementById('unhider').style.display = "flex"
    document.getElementById('unhider728').style.display = "block"
  }

  function toggleText() {
    var text = document.getElementById("editions__check-container");
    var sign = document.getElementById("editions__check-320-sign");
    if (text.style.display === "block") {
      text.style.display = "none";
      sign.style.transform = "rotate(-45deg)"
      sign.style.marginBottom = "2px"
    } else {
      text.style.display = "block";
      sign.style.transform = "rotate(135deg)"
      sign.style.marginBottom = "-2px"
    }
  }

document.querySelector('#burger').addEventListener('click', function() {
  document.querySelector('#burger-menu').classList.toggle('header__burger-is-active')
})

document.querySelector('#burger-close').addEventListener('click', function() {
  document.querySelector('#burger-menu').classList.toggle('header__burger-is-active')
})

document.querySelector('#touch-beautiful__1920-menu-item1').addEventListener('click', function(){
  document.querySelector('#sign1').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll1").classList.toggle("scroll-active")


  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")

})

document.querySelector('#touch-beautiful__1920-menu-item2').addEventListener('click', function(){
  document.querySelector('#sign2').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll2").classList.toggle("scroll-active2")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")


})

document.querySelector('#touch-beautiful__1920-menu-item3').addEventListener('click', function(){
  document.querySelector('#sign3').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll3").classList.toggle("scroll-active3")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")
})

document.querySelector('#touch-beautiful__1920-menu-item4').addEventListener('click', function(){
  document.querySelector('#sign4').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll4").classList.toggle("scroll-active4")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll5").classList.remove("scroll-active5")
})

document.querySelector('#touch-beautiful__1920-menu-item5').addEventListener('click', function(){
  document.querySelector('#sign5').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll5").classList.toggle("scroll-active5")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
})

document.querySelector('#touch-beautiful__1920-menu-item1').addEventListener('keypress', function(){
  document.querySelector('#sign1').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll1").classList.toggle("scroll-active")


  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")

})

document.querySelector('#touch-beautiful__1920-menu-item2').addEventListener('keypress', function(){
  document.querySelector('#sign2').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll2").classList.toggle("scroll-active2")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")


})

document.querySelector('#touch-beautiful__1920-menu-item3').addEventListener('keypress', function(){
  document.querySelector('#sign3').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll3").classList.toggle("scroll-active3")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll5").classList.remove("scroll-active5")
})

document.querySelector('#touch-beautiful__1920-menu-item4').addEventListener('keypress', function(){
  document.querySelector('#sign4').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll4").classList.toggle("scroll-active4")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign5').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
  document.querySelector("#scroll5").classList.remove("scroll-active5")
})

document.querySelector('#touch-beautiful__1920-menu-item5').addEventListener('keypress', function(){
  document.querySelector('#sign5').classList.toggle("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item5').classList.toggle("touch-beautiful__1920-menu-item-active")
  document.querySelector("#scroll5").classList.toggle("scroll-active5")

  document.querySelector('#sign1').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item1').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign3').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item3').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign4').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item4').classList.remove("touch-beautiful__1920-menu-item-active")

  document.querySelector('#sign2').classList.remove("touch-beautiful__1920-menu-sign-active")
  document.querySelector('#touch-beautiful__1920-menu-item2').classList.remove("touch-beautiful__1920-menu-item-active")
 
 
  document.querySelector("#scroll1").classList.remove("scroll-active")
  document.querySelector("#scroll3").classList.remove("scroll-active3")
  document.querySelector("#scroll4").classList.remove("scroll-active4")
  document.querySelector("#scroll2").classList.remove("scroll-active2")
})