import React, {useState} from 'react'
import FormPage from './FormPage'

function App() {
  const [page,setPage] = useState(0)
  const [data,setData] = useState({
    email: '',
    username: '',
    color: '',
    spam: true
  })

  const handleButtonClick = () => {
    if (page === 4) {
      setPage(0)
    } else {
      setPage(prevPage => prevPage + 1)
    }
  }

  const buttonText = () => {
    if (page < 3) {
      return "next"
    } else if (page === 3) {
      return "submit"
    } else {
      return "edit"
    }
  }

  return (
    <div className="App">
      <h1>
        React multi-part form
      </h1>
      <p>
        by <a href="https://twitter.com/jwhubert91">@jwhubert91</a>
      </p>
      <main className='main-form'>
        <FormPage page={page} data={data} setData={setData} />
        <button onClick={handleButtonClick}>{buttonText()}</button>
      </main>
    </div>
  );
}

export default App;
