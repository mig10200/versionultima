const audio = document.querySelector("#music");
const forwardButton = document.querySelector("#forward");
const backButton = document.querySelector("#back");

function played() {
  audio.play();

}
function pause() {
  audio.pause();
}

//----------------------------------------Siguiente-------------------------------------
let count = 0;
forwardButton.addEventListener('click', () => {
  count++;
  switch (count) {
    case 1:
      audio.src = 'music/Nanpa_Básico.mp3';
      audio.play();
      document.querySelector("#titulomusic").innerHTML = "Los No Tan Tristes";
      document.querySelector("#logoimg").src = "img/losnotantriste.jpg";
      console.log("Canción " + count)
      break;

    case 2:
      audio.src = 'music/Penitencia(MP3_128K).mp3';
      audio.play();
      document.querySelector("#titulomusic").innerHTML = "Penitencia";
      document.querySelector("#logoimg").src = "img/penitencia.jpg";
      console.log("Canción " + count)
      break;
    case 3:
      audio.src = 'music/Safaera.mp3';
      audio.play();
      document.querySelector("#titulomusic").innerHTML = "Safaera";
      document.querySelector("#logoimg").src = "img/safaera.jpg";
      console.log("Canción " + count)
      break;
    case 4:
      audio.src = 'music/QUEVEDO.mp3';
      audio.play();
      document.querySelector("#titulomusic").innerHTML = "Sessions #52"
      document.querySelector("#logoimg").src = "img/quevedo.jpg";
      console.log("Canción " + count)
      break;
  }
  return count
});
//------------------------------------------Retroceder-------------------------------------------
backButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    switch (count) {
      case 1:
        audio.src = 'music/Nanpa_Básico.mp3';
        audio.play();
        document.querySelector("#titulomusic").innerHTML = "Los No Tan Tristes"
        document.querySelector("#logoimg").src = "img/losnotantriste.jpg";
        console.log("Canción " + count)
        break;
      case 2:
        audio.src = 'music/Penitencia(MP3_128K).mp3';
        audio.play();
        document.querySelector("#titulomusic").innerHTML = "Penitencia"
        document.querySelector("#logoimg").src = "img/penitencia.jpg";
        console.log("Canción " + count)
        break;
      case 3:
        audio.src = 'music/Safaera.mp3';
        audio.play();
        document.querySelector("#titulomusic").innerHTML = "Safaera"
        document.querySelector("#logoimg").src = "img/safaera.jpg";
        console.log("Canción " + count)
        break;
      case 4:
        audio.src = 'music/QUEVEDO.mp3';
        audio.play();
        document.querySelector("#titulomusic").innerHTML = "Sessions #52"
        document.querySelector("#logoimg").src = "img/quevedo.jpg";
        console.log("Canción " + count)
        break;
    }
    return count;
  }
});


var progressBar = document.getElementById("progress");

audio.addEventListener("timeupdate", function () {
  var progress = Math.floor((audio.currentTime / audio.duration) * 100);
  progressBar.style.width = progress + "%";
});