    // This is how we got around the user gesture warning in the console. YAY
    function touchStarted() {
        // console.log("The sequencer sounds have been gestured!!!!!!!!!!!!!!!!")
        getAudioContext().resume()
      }

    function fetchPreview(id){
        const previewURL = `https://freesound.org/apiv2/sounds/${id}/?token=p5JJnxO4rzVs7KfSkL06XOGh9hyzTrw6x7PJpTHG`;
        fetch(previewURL)
        .then (r => r.json())
        .then((obj) => {
            console.log(obj.previews["preview-hq-mp3"])
        });
    }
    const lowBassFetch = fetchPreview(115525)
    const trumpFetch = fetchPreview(273870)
    const chirpFetch = fetchPreview(115525)
    const hiHatFetch = fetchPreview(496888)
    const snareFetch = fetchPreview(496889)
    const kickFetch = fetchPreview(496890)
    
    const kick = document.querySelector(".kick")
    kick.src = soundMenu.kick
    
    const snare = document.querySelector(".snare")
    snare.src = soundMenu.snare
    
    const hiHat = document.querySelector(".hiHat")
    hiHat.src = soundMenu.hiHat
    
    const chirp = document.querySelector(".chirp")
    chirp.src = soundMenu.chirp
    
    const trump = document.querySelector(".trump")
    trump.src = soundMenu.trump
    
    const lowBass = document.querySelector(".lowBass")
    lowBass.src = soundMenu.lowBass
    
    function playKick(){
        var kickPlay = new Audio(kick.src);
        kickPlay.play()
    }
    function playSnare(){
        var snarePlay = new Audio(snare.src);
        snarePlay.play()
    }
    function playHiHat(){
        var hiHatPlay = new Audio(hiHat.src);
        hiHatPlay.play()
    }
    function playChirp(){
        var chirpPlay = new Audio(chirp.src);
        chirpPlay.play()
    }
    function playTrump(){
        var trumpPlay = new Audio(trump.src);
        trumpPlay.play()
    }
    function playLowBass(){
        var lowBassPlay = new Audio(lowBass.src)
        lowBassPlay.play()
    }
    function clickKick(event){
        event.preventDefault()
    }
    const button1 = document.querySelector(".js-restart");
button1.addEventListener("click", ()=> {
    drums.loop();
  // drums.pause();
})
button1.addEventListener("touchstart", ()=> {
    drums.loop();
    // drums.pause();
  })
const button2 = document.querySelector(".js-stop");
button2.addEventListener("click", ()=> {
  drums.stop();
})
button2.addEventListener("touchstart", ()=> {
    drums.stop();
  })

    
    
    
    