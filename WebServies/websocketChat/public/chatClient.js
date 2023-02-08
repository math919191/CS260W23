
// Adjust the webSocket protocol to what is being used for HTTP
// pick wss or ws depening on if it is http or https
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  
// Display that we have opened the webSocket
socket.onopen = (event) => {
    appendMsg('system', 'websocket', 'connected');
  };

//When we get a message, display it
socket.onmessage = async (event) => {
    const text = await event.data.text();
    const chat = JSON.parse(text);
    appendMsg('friend', chat.name, chat.msg);
};

//when it closes...
socket.onclose = (event) => {
    appendMsg('system', 'websocket', 'disconnected');
    document.querySelector('#name-controls').disabled = true;
    document.querySelector('#chat-controls').disabled = true;
};

//send a message
function sendMessage() {
    const msgEl = document.querySelector('#new-msg');
    const msg = msgEl.value;
    if (!!msg) {
      appendMsg('me', 'me', msg);
      const name = document.querySelector('#my-name').value;
      socket.send(`{"name":"${name}", "msg":"${msg}"}`);
      msgEl.value = '';
    }
  }

//create a long list of messages
  function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chat-text');
    chatText.innerHTML =
      `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
      chatText.innerHTML;
  }

//send message with keystroke enter
  const input = document.querySelector('#new-msg');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  

//disable controls if no name is provided.
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');

myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});









