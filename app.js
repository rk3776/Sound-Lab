var drums = document.getElementById("drums");
var interactive = document.getElementById("interactive");
var square = document.getElementById("square");
var intro = document.getElementById("intro");

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.Synth().toDestination();


var color = "salmon";


intro.addEventListener('click', ()=>{
  intro.style.display = "none";
})

document.body.addEventListener('keydown', (event) => {
  if(event.key == 'f'){
    synth.triggerAttackRelease("C4", "8n");
    square.style.backgroundColor = "greenyellow";
  }
  else if (event.key == 'h'){
    synth.triggerAttackRelease("E4", "8n");
    square.style.backgroundColor = "indigo";
  }
  else if (event.key == 'g'){
    synth.triggerAttackRelease("G4", "8n");
    square.style.backgroundColor = "gold";
  }
  else {
    square.style.backgroundColor = "white";
  }
});


interactive.addEventListener('mouseenter', () => {
  drums.play();
  document.body.style.backgroundColor = color;
  interactive.style.backgroundColor = "lightblue";

  //synth.triggerAttackRelease("C4", "8n");
});


interactive.addEventListener('mouseleave', () => {
  drums.pause();
  document.body.style.backgroundColor = "white";
  interactive.style.backgroundColor = "white";

});


drums.addEventListener('timeupdate', ()=> {
  console.log("updated:", drums.currentTime)
  if(drums.currentTime > 2)
  {
    color = "skyblue";
  }
  else
  {
    color = "slateblue";
  }
})
