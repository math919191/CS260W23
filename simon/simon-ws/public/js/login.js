
//checks if the user is logged in and sets the display
(async () => {
    let authenticated = false;
    
    const userName = localStorage.getItem('userName');
    
    if (userName) {
        //sets the username field to the username in local storage
        const nameEl = document.querySelector('#userName');
        // nameEl.value = userName;
        const user = await getUser(nameEl?.value);
        authenticated = user?.authenticated;
    }

    if (authenticated == false){
        setDisplay("playControls", 'none')
        setDisplay("loginControls", 'block')    
    } else {
        setDisplay("playControls", 'block')
        setDisplay("loginControls", 'none')
    }
})();



async function loginUser() {
    loginOrCreateUser(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreateUser(`/api/auth/create`);
}

async function loginOrCreateUser(endpoint){
    const email = document.querySelector("#username")?.value;
    const password = document.querySelector("#password")?.value;

    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(
            {email: email, password: password}
        ),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })

    const body = await response.json();

    if (response?.status == 200){
        localStorage.setItem('userName', email);
        window.location.href = 'play.html';
    } else {
        const modalEl = document.querySelector('#error');
        // modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        //modalEl.textContent = `⚠ Error: ${body.msg}`;
        modalEl.innerHTML = "error..."
        ///onst msgModal = new bootstrap.Modal(modalEl, {});
        //msgModal.show();
      }

}

function play() {
    window.location.href = 'play.html';
}

function logout() {
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));

    localStorage.clear();

}

async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
}



function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}
