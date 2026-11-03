document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('rlHeroVideo');
    const playPauseBtn = document.getElementById('rlPlayPauseBtn');
    const muteUnmuteBtn = document.getElementById('rlMuteUnmuteBtn');

    if (!video) return;

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

    video.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

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

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.esco-menu');
  const nav = document.querySelector('.esco-nav');
  let closeBtn;

  function showMobileNav() {
    nav.classList.add('mobile-active');
    // Add close (cross) button if not present
    if (!closeBtn) {
      closeBtn = document.createElement('span');
      closeBtn.className = 'esco-close';
      closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      nav.prepend(closeBtn);
      closeBtn.addEventListener('click', hideMobileNav);
    }
    closeBtn.style.display = 'block';
  }

  function hideMobileNav() {
    nav.classList.remove('mobile-active');
    if (closeBtn) closeBtn.style.display = 'none';
  }

  menuBtn.addEventListener('click', function() {
    showMobileNav();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') hideMobileNav();
  });

  nav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') hideMobileNav();
  });
});