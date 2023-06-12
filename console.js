/* styles */
var myStyles = `
	.myButtonContainer {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 40vh;
		display: grid;
		opacity: 0.8;
	}
	.myButtonContainer button {
		font-size: 10vh;
	}
	.myButtonContainer button:hover {
		background-color: green;
	}
	.myButtonContainer.hide,
	.myButtonContainer .hide {
		display: none;
	}
`
/* /styles */

/* buttons on page */
var myStyleConainer = document.createElement('style')
myStyleConainer.textContent = myStyles
document.body.appendChild(myStyleConainer)

var myButtonContainer = document.createElement('div')
myButtonContainer.classList.add('myButtonContainer')
document.body.appendChild(myButtonContainer)

var nextBtn = document.createElement('button');
nextBtn.textContent='next';
myButtonContainer.appendChild(nextBtn);
nextBtn.addEventListener('click', nextEpisode);

var fsBtn = document.createElement('button');
fsBtn.textContent='full screen';
myButtonContainer.appendChild(fsBtn);
fsBtn.addEventListener('click', goFullScreen);
/* /buttons on page */

/* keyboard */
var tmp = null
document.addEventListener('keydown', (event)=>{
	tmp = event
	console.log(event)
	switch(event.code) {
		case 'NumpadAdd': //+
			nextEpisode()
			break
		case 'NumpadSubtract': //-
			prevEpisode()
			break
		case 'Numpad7': //7
			goFullScreen()
			break
		case 'Numpad5': //5
			playPauseVideo()
			break
		case 'Numpad4': //4
			showHideButtons()
			break
		case 'Numpad1': //1
			showHideNextButton()
			break
		default: 
			console.log(event.code)
	}
})

/* /keyboard


/* functions */
function goFullScreen() {
	document.querySelector('#anime iframe').contentDocument.querySelector('video').requestFullscreen()
}
function playPauseVideo() {
	const video = document.querySelector('#anime iframe').contentDocument.querySelector('video')
	if (video.paused) {
		video.play()
	}
	else {
		video.pause()
	}
}
function nextEpisode() {
	const nextEpisodeBtn = document.querySelector('.epizode.active').nextElementSibling;
	if (nextEpisodeBtn) {
		nextEpisodeBtn.click();	
	}
}
function prevEpisode() {
	const nextEpisodeBtn = document.querySelector('.epizode.active').previousElementSibling;
	if (nextEpisodeBtn) {
		nextEpisodeBtn.click();	
	}
}
function showHideButtons() {
	myButtonContainer.classList.toggle('hide')
}
function showHideNextButton() {
	nextBtn.classList.toggle('hide')
}
/* /functions */
