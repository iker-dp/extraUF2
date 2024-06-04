window.onload = function() {
    var play = document.getElementById('botoPlay');

    play.addEventListener('click', reproduirAudio);
};

function reproduirAudio() {
    let audio = document.getElementById('audioAterratge');

    document.getElementById('nau').classList.add("animacio");
    console.log("Ok");
    audio.play();

    // Temporitzador per treure l'animació
    setInterval(function(){ document.getElementById('nau').classList.remove("animacio"); }, 10000);
}