
// Obtén el iframe de YouTube y su fuente
const youtubeIframe = document.getElementById('youtube-iframe');
const youtubeSource = youtubeIframe.src;

// Función para detener la reproducción de YouTube
function stopYouTubeVideo() {  
  // Restaura la fuente del iframe
  youtubeIframe.src = youtubeSource;
}

document.getElementById('open-video').addEventListener('click', function() {
    document.getElementById('video-modal').style.display = 'block';
  });

  document.getElementById('open-video-dos').addEventListener('click', function() {
    document.getElementById('video-modal').style.display = 'block';
  });
  
  document.getElementById('close-video').addEventListener('click', function() {
    document.getElementById('video-modal').style.display = 'none';
    stopYouTubeVideo();
  });