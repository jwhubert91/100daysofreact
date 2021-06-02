import React from 'react'

function FormPage({page,data,setData}) {
  return (
    <div>
      {page === 0 && 
        <input 
          type="text" 
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData(prevData => ({
            ...prevData,
            email: e.target.value
          }))}
        />}
      {page === 1 && 
        <input 
          type="text" 
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData(prevData => ({
            ...prevData,
            username: e.target.value
          }))}
        />}
      {page === 2 && 
        <input 
          type="text" 
          placeholder="Favorite color"
          value={data.color}
          onChange={(e) => setData(prevData => ({
            ...prevData,
            color: e.target.value
          }))}
        />}
      {page === 3 && 
        <div>
          <p>Do you want spam?
            <input 
                type="checkbox" 
                checked={data.spam}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  spam: e.target.checked
                }))}
            />
          </p>
        </div>
      }
      {page === 4 && 
        <div className="results">
          <p><strong>email:</strong> {data.email}</p>
          <p><strong>username:</strong> {data.username}</p>
          <p><strong>favorite color:</strong> {data.color}</p>
          <p><strong>spam me?</strong> {data.spam ? "Yes" : "No"}</p>
        </div>
      }
    </div>
  )
}

export default FormPage
