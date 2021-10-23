# JavaScript Drum Kit

<img src = "JSDrumKit.gif"> 


## Audio 
```js
  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/openhat.wav"></audio>
  <audio data-key="71" src="sounds/boom.wav"></audio>
  <audio data-key="72" src="sounds/ride.wav"></audio>
  <audio data-key="74" src="sounds/snare.wav"></audio>
  <audio data-key="75" src="sounds/tom.wav"></audio>
  <audio data-key="76" src="sounds/tink.wav"></audio>
```
Selects the corresponding key-code in the audio element
```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
```
Setting currentTime to 0 rewinds the audio to the start (Allow sound to keep playing when key is pressed multiple times)
```js
audio.currentTime = 0;
```

Play the source file's audio sound
```js
audio.play(); 
```

## Adding class to element
```css
.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
```
Add `playing` to the class list
```js
const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

key.classList.add('playing'); 
```

## Removing Transition and Removing `playing` class in element

Skips the properties that are not `transform`
```js
if (e.propertyName !== 'transform') return; 
```

remove the class name `playing` from element
```js
this.className.remove('playing'); 
```

## JS Code
```js

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
}


//listen for transition end for each key
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip property if not "transform"
  //remove the class "playing" from key class
  this.classList.remove('playing');
}

//remove playing class for each key 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
```















