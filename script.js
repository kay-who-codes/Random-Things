document.getElementById('random-wiki').addEventListener('click', () => {
  window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
});

document.getElementById('random-video').addEventListener('click', () => {
  const randomVideo = `https://www.youtube.com/watch?v=${Math.random().toString(36).substring(2, 8)}`;
  window.open(randomVideo, '_blank');
});

document.getElementById('random-image').addEventListener('click', () => {
  const randomImage = `https://source.unsplash.com/random/800x600`;
  window.open(randomImage, '_blank');
});
