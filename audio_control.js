const audioInput = document.getElementById('audio_input');
const audioPlayer = document.getElementById('audio_player');

audioInput.addEventListener('change', function() {
  const file = this.files[0]; // get the uploaded audio file
  if (file) {
    // creates a temporary URL for the audio file
    const fileURL = URL.createObjectURL(file);

    // sets the audio element's source to this URL
    audioPlayer.src = fileURL;

    /*  interactivity feature:
            green when playing
            red when paused, seeking or end
    */
    audioPlayer.addEventListener('play', () => {
        document.body.style.backgroundColor = "green";
    });
    audioPlayer.addEventListener('pause', () => {
        document.body.style.backgroundColor = "red";
    });

    /*
        keyboard controls
    */
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            //spacebar: play/pause
            case ' ':
            e.preventDefault();
            audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
            break;

            //arrowRight: go forward 5 seconds
            case 'ArrowRight':
            audioPlayer.currentTime += 5;
            break;

            //arrowLeft: go back 5 seconds
            case 'ArrowLeft':
            audioPlayer.currentTime -= 5;
            break;

            //arrowUp: volume up
            case 'ArrowUp':
            audioPlayer.volume = Math.min(audioPlayer.volume + 0.1, 1);
            break;

            //arrowDown: volume down
            case 'ArrowDown':
            audioPlayer.volume = Math.max(audioPlayer.volume - 0.1, 0);
            break;
        }
    });
  }
});
