
function startAudio() {
    // Get the audio element
    const audio = document.getElementById('bgm');

    // Set the volume
    audio.volume = 0.5;

    // Play the audio
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}


startAudio();