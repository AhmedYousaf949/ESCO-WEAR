document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('rlHeroVideo');
    const playPauseBtn = document.getElementById('rlPlayPauseBtn');
    const muteUnmuteBtn = document.getElementById('rlMuteUnmuteBtn');

    if (!video) return;

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // // Mute/Unmute functionality
    // muteUnmuteBtn.addEventListener('click', function() {
    //     if (video.muted) {
    //         video.muted = false;
    //         muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    //     } else {
    //         video.muted = true;
    //         muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    //     }
    // });

    // Update button when video ends
    video.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Responsive video source handling
    function updateVideoSource() {
        if (window.innerWidth < 768) {
            video.src = "//video.ralphlauren.com/v2/2025/08/20250819-homepage/Video-MOB.mp4";
        } else {
            video.src = "//video.ralphlauren.com/v2/2025/08/20250819-homepage/Video-DSK.mp4";
        }
        video.play();
    }

    window.addEventListener('resize', updateVideoSource);
    updateVideoSource();
});