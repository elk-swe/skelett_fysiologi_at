(() => {
  const scales = [0.9, 1, 1.1, 1.2];
  const root = document.documentElement;
  let savedScale = 1;
  try { savedScale = Number(localStorage.getItem('bonePhysiologyTextScale')) || 1; } catch { /* Storage may be unavailable in restricted browsers. */ }
  let currentScale = scales.includes(savedScale) ? savedScale : 1;

  const toolbar = document.createElement('div');
  toolbar.className = 'text-size-tools';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Ändra textstorlek');
  toolbar.innerHTML = '<span>Textstorlek</span><button type="button" data-scale="0.9" aria-label="Mindre text">A−</button><button type="button" data-scale="1" aria-label="Normal textstorlek">A</button><button type="button" data-scale="1.1" aria-label="Större text">A+</button><button type="button" data-scale="1.2" aria-label="Största text">A++</button>';
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) siteHeader.after(toolbar);
  else document.body.prepend(toolbar);

  const applyScale = (scale) => {
    currentScale = scale;
    root.style.setProperty('--text-scale', String(scale));
    try { localStorage.setItem('bonePhysiologyTextScale', String(scale)); } catch { /* The current page still responds to the selected size. */ }
    toolbar.querySelectorAll('button').forEach((button) => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.scale) === currentScale));
    });
  };
  toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-scale]');
    if (button) applyScale(Number(button.dataset.scale));
  });
  applyScale(currentScale);

  // Set the YouTube video ID here when the recorded lecture is ready.
  // The ID is the final part of a URL such as youtube.com/watch?v=XXXXXXXXXXX.
  const YOUTUBE_VIDEO_ID = '';
  const player = document.getElementById('youtube-player');
  const placeholder = document.getElementById('video-placeholder');
  if (player && placeholder && /^[\w-]{11}$/.test(YOUTUBE_VIDEO_ID)) {
    player.src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`;
    player.hidden = false;
    placeholder.hidden = true;
  }
})();
