const customAudioPlayer = document.getElementById('customAudioPlayer');
const musicOnOffButton = document.getElementById('musicOnOffButton');

musicOnOffButton.addEventListener('click', () => {
  if (customAudioPlayer.paused) {
    customAudioPlayer.play();
    musicOnOffButton.textContent = 'Music Off';
  } else {
    customAudioPlayer.pause();
    musicOnOffButton.textContent = 'Music On';
  }
});