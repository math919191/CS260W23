function login(){
    console.log("logging in.")
    const nameEl = document.querySelector("#name")
    localStorage.setItem("userName", nameEl.value)
    window.location.href = "play.html"
}


(async () => {
    let authenticated = true;
    if (authenticated == false){
        setDisplay("playControls", 'none')
        setDisplay("loginControls", 'block')    
    } else {
        setDisplay("playControls", 'block')
        setDisplay("loginControls", 'none')
    }
    console.log("running")
})();


function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }