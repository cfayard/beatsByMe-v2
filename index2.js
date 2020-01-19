window.addEventListener("load", () => {

    var record_flag = 0;
    
    //THIS IS THE RECORDING TIMELINE
    var times = [];
    var notes = [];
    
    
    
      const pads = document.querySelectorAll(".pads div");
      const pads2 = document.querySelectorAll(".pads2 div");
    
    
      const sound_array = [
        "assets/7634__ls__loop1-stripped-down-againrecycled-010.wav",
        "assets/133100__klankbeeld__horror-ambience-10.wav",
        "assets/465293__esistnichtsoernst__smooth-strings.wav"
    ];


      const sound_array2 = [
        "assets/fx.mp3",
        "assets/53933__meutecee__trumpethit03.wav",
        "assets/207555__patricklieberkind__deep-cinematic-rumble-stereo.wav"
      ];
    
      pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          play_sound(index);
        });
      });
      
      pads2.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          play_sound(index);
        });
      });
    
    
      document.addEventListener("keypress", function(e){
       
        if(record_flag == 1){
        notes.push(e.which); //push into notes array
        times.push(e.timeStamp); // push into timestamp array
        }
        if(e.keyCode == 65){
          play_sound(0);
        }else if(e.keyCode == 83){
          play_sound(1);
        }else if(e.keyCode == 68){
          play_sound(2);
        }else if(e.keyCode == 70){
          play_sound(3);
        }else if(e.keyCode == 71){
          play_sound(4);
        }else if(e.keyCode == 72){
          play_sound(5);
        }else{
          console.log("none");
        }
      });
    
    
    for(let index = 0; index < sound_array.length; index++) {
    var audio_var = sound_array[index];
    var audio = new Audio(audio_var);
    audio.load();
    }
    
    
    async function play_sound(ind){
      var audio_var = sound_array[ind];
      var audio = new Audio(audio_var);
      audio.load();
      audio.play();  
      //console.log(times);
      console.log(notes);
    }
      
    async function myfun(time_code,note){
    
      if(note == 65){
         var audio_var = sound_array[0];
         var color_replay = 0;
       }else if(note == 83){
         var audio_var = sound_array[1];
         var color_replay = 1;
       }else if(note == 68){
         var audio_var = sound_array[2];
         var color_replay = 2;
       }else if(note == 70){
         var audio_var = sound_array[3];
         var color_replay = 3;
       }else if(note == 71){
         var audio_var = sound_array[4];
         var color_replay = 4;
       }else if(note == 72){
         var audio_var = sound_array[5];
         var color_replay = 5;
       }else{
         console.log("none");
       }
    
    
      setTimeout(function myfuntion(){
            console.log("play note"+ note);
            var audio = new Audio(audio_var);
            createBubble(color_replay);
            audio.load();
            audio.play();  
            console.log("done");
      }, time_code-times[0])
    }
});