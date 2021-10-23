
function playSound(e) {
  //selects the corresponding data-key when pressed on keyboard 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  //stops function from running when a key pressed is wrong
  if (!audio) return;

  // rewind to start (allow audio to keep playing when pressed multiple times)
  audio.currentTime = 0;
  //play the current audio that correspond with its src file
  audio.play();

  //add playing class to key when pressed
  key.classList.add('playing');
  //transition end event
}


//listen for transition end for each key
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip property if not "transform"
  //remove the class "playing" from key
  this.classList.remove('playing');
}

//remove playing class for each key 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
