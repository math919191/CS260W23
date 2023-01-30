
async function loadScoresAsync(){
  let scores = []
  try {
    const response = await fetch('/api/scores');
    scores = await response.json();
    localStorage.setItem('scores', JSON.stringify(scores));

  } catch {
    const scoresText = localStorage.getItem('scores');
    console.log("loading from browswer storage");
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  }
  loadScores(scores);
}



function loadScores(currScores){
    console.log(currScores);
    
    let data = currScores;
    const tableData = data.map(value => {
        return (
          `<tr>
             <th scope="row">1</th>
             <td>${value.name}</td>
             <td>${value.score}</td>
             <td>${value.date}</td>
          </tr>`
        );
      }).join('');
      
      let tableBody = document.querySelector("#tableBody");
      tableBody.innerHTML = tableData;
}


loadScoresAsync()


