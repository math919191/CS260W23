let colors = ["green", "red", "blue", "yellow"]

function getRandomColor(){
    let rand = Math.floor(Math.random()*10) % 4        
    return colors[rand];
}

function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
}

export {getRandomColor, delay }
