import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch(`https://randomuser.me/api/?results=25`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        this.setState({
          users: results,
          isLoading: false,
        });
        console.log(this.state);
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Company A Personnel Database</h1>
        {/* display a message if we get an error */}
        {error ? <p>{error.message}</p> : null}
        {/* Here is our data check */}
        {!isLoading ? (
          users.map((user) => {
            const { login, name, email, picture } = user;
            return (
              <div className='user-container' key={login.uuid}>
                <div className='image-container'>
                  <img src={picture.medium} alt='user-profile' />
                </div>
                <div className='info-container'>
                  <p>Name: {name.first + ' ' + name.last}</p>
                  <p>Email address: {email}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
        <footer>
          Created in Brooklyn, NY in the year 2020 by{' '}
          <a href='www.dev.to/jwhubert91'>James Hubert</a>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
