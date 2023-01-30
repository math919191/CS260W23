function login(){
    console.log("logging in.")
    const nameEl = document.querySelector("#name")
    localStorage.setItem("userName", nameEl.value)
    window.location.href = "play.html"
}