import {React, useState, useEffect} from 'react';

export function Scores() {

  const [scores, setScores] = useState([])


  useEffect( () => {

    const fetchData = async () => {
      let response = await fetch('/api/scores');
      let scores = await response.json();
      // localStorage.setItem('scores', JSON.stringify(scores));
      console.log(scores)
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
                                          
        </tbody>
      </table>
  </div>

  );
}