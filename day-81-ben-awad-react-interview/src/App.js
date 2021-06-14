import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import awad from './awad-large.jpeg'

export default function App() {
  const [webData, setWebData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      // .then((data) => console.log([data.results[0]]));
      .then((data) => setWebData([data.results[0]]));
  }, []);

  const addNewUser = () => {
    fetch(`https://randomuser.me/api?page=${currentPage}`)
      .then((response) => response.json())
      // .then((data) => console.log([...webData, data.results[0]]))
      .then((data) => setWebData((prevData) => [...prevData, data.results[0]]));
    setCurrentPage(currentPage + 1);
  };

  const userCardsList =
    webData &&
    webData.map((pageResults, idx) => {
      return (<UserCard user={pageResults} key={idx} />)
    });

  // const userData = webData && webData.map(pageResults => (JSON.stringify(pageResults)))

  return (
    <div className="app">
      <header>
        <img src={awad} alt="awad!" />
        <div className='header-text'>
          <h1>Ben Awad{' '}
            <a href='https://www.youtube.com/watch?v=gnkrDse9QKc&t=7s'>React Interview</a>
          {' '}Project</h1>
          <h3>
            by{' '}
            <a href='https://twitter.com/jwhubert91'>@jwhubert91</a>
          </h3>
        </div>
      </header>
      <main>
        <div className='app__mainButtonContainer'>
          <button onClick={addNewUser}>
            Append new user
          </button>
        </div>
        {webData && userCardsList}
        {/* {userData} */}
      </main>
    </div>
  );
}
