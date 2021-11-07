var drums = document.getElementbyId("drums");
var interactive = document.getElementbyId("interactive");


var color = "salmon";

interactive.addEventListener('mousecenter', () => {
  drums.play();
  document.body.style.backgroundColor = "skyblue";
})


interactive.addEventListener('mouseleave', () => {
  drums.pause();
  document.body.style.backgroundColor = "white";

})


drums.addEventListener('updatedtime', ()=> {

})
