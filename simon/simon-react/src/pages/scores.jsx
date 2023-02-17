import {React, useState, useEffect} from 'react';

export function Scores() {

  const [scores, setScores] = useState([])


  useEffect( () => {
    const fetchData = async () => {
      let scores = [];
      let response = await fetch('/api/scores');

      if (response.status == 200){
        scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } else {
        let scoresFromStorage = localStorage.getItem("scores"); 
        if (scoresFromStorage){
          scores = JSON.parse(scoresFromStorage)
        }
      } 
      setScores(scores)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <div className="content">
      <table border="2" className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
          </tr>

          
        </thead>

        <tbody id="tableBody">
          {scores.map((item, key) => {
            return (
              <tr key={key + 1}>
                <td>{key}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.date}</td>
              </tr>
            )
          })}                             
        </tbody>
      </table>
  </div>

  );
}