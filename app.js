const drums = new Howl({
  src: ["./drums/drums.webm", "./drums/drums.mp3"],
  sprite: {
    "CYCdh_AcouKick-14": [0, 625.8503401360545],
    "CYCdh_Crash-01": [2000, 15228.571428571428],
    "CYCdh_Kurz02-Snr02": [19000, 496.82539682539687],
    "CYCdh_LudRimC-07": [21000, 1442.879818594104],
    "CYCdh_Sab_ClHat-06": [24000, 619.0476190476204],
    "KHats Open-07": [26000, 2863.582766439908],
  },
});

//drums.play();

const drumkit = document.querySelector(".drumkit");

function playDrum(event) {
  if (event.target.classList.contains("pad")) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
}

function playSnare() {
  let soundToPlay = "CYCdh_Kurz02-Snr02";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}

function playCrash() {
  let soundToPlay = "CYCdh_Crash-01";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}
function playClap() {
  let soundToPlay = "CYCdh_LudRimC-07";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}
function playClHiHat() {
  let soundToPlay = "CYCdh_Sab_ClHat-06";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}
function playOpHiHat() {
  let soundToPlay = "KHats Open-07";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}
function playKick() {
  let soundToPlay = "CYCdh_AcouKick-14";
  console.log(soundToPlay);
  drums.play(soundToPlay);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    playSnare();
    console.log("snare");
  } else {
    if (e.key === "f") {
      playCrash();
      console.log("crash");
    } else {
      if (e.key === "s") {
        playClap();
        console.log("clap");
      } else {
        if (e.key === "d") {
          playClHiHat();
          console.log("closed high hat");
        } else {
          if (e.key === "j") {
            playKick();
            console.log("kick");
          } else {
            if (e.key === "k") {
              playOpHiHat();
              console.log("open high hat");
            }
          }
        }
      }
    }
  }
});

drumkit.addEventListener("click", () => {
  if (event.target.classList.contains("pad")) {
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
});

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
//setViewportHeight();

window.addEventListener("resize", setViewportHeight);
