import React, { Component, Fragment } from 'react';
import TinderCard from './HOCs/TinderCard';

class TinderInfo extends Component {
  state = {
    isLoading: true,
    user: [],
    error: null,
  };

  getUserInfo() {
    fetch('https://randomuser.me/api/?inc=picture,name,dob,location')
      .then((res) => res.json())
      .then(async (myJson) => {
        const { results } = myJson;
        this.setState({ user: results, isLoading: false });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  reloadInfo = () => {
    this.getUserInfo();
  };

  componentDidMount() {
    if (this.state.user.length === 0) {
      this.getUserInfo();
    }
  }

  render() {
    const { isLoading, user, error } = this.state;
    return (
      <Fragment>
        {error && <p>{error.message}</p>}
        {!isLoading ? (
          <div className='card user-info-card'>
            <img
              src={user[0].picture.large}
              alt='user-tinder-profile'
              className='card-img-top'
            />
            <div className='card-body'>
              <h5 className='card-title'>
                {user[0].name.first}, {user[0].dob.age}
              </h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {user[0].location.city}
              </h6>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
        <div className='buttons-container'>
          <button className='dislike' onClick={this.reloadInfo}>
            <i className='fa fa-times'></i>
          </button>
          <button className='like' onClick={this.reloadInfo}>
            <i className='fa fa-heart'></i>
          </button>
        </div>
      </Fragment>
    );
  }
}

const TinderApp = TinderCard(TinderInfo);
export default TinderApp;
