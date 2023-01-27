function loadScores(){
    let currScores = JSON.parse(localStorage.getItem('scores'));
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


loadScores()

const data = [{Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'},]; // any json data or array of objects

