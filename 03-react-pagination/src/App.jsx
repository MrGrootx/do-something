import "./index.css";

import Data from "./data.json";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav>
        <ul>
          <li>
            <a href="#" onClick={prePage}>
              Previous
            </a>
          </li>
          {numbers.map((n, i) => {
            <li key={i} className={`${currentPage === n ? "active" : ""}`}>
              <a href="#" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>;
          })}
          <li>
            <a href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function nextPage() {}
  function prePage() {}
  function changeCPage(id) {}
}
