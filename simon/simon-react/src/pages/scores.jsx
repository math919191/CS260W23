import React from 'react';

export function Scores() {

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