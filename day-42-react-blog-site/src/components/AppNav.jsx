import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import {Menu} from 'antd';
import {auth} from '../firebase';

const AppNav = (props) => {

  const [user,setUser] = useState(false);

  useEffect(() => {
    setUser(props.user.uid);
  },[props.user]);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        alert('Successfully signed out.');
      })
      .catch((err) => {
        alert('An error occurred on sign out.')
        console.error(err);
      })
    ;
  }

  return (
    <nav className="app_main_navigation">
      <Menu mode="horizontal">
        {
          user && (
            <Menu.Item key="posts">
              <Link to={`/blogs/${user}/posts`}>
                Posts
              </Link>
            </Menu.Item>
          )
        }
        {
          user && (
            <Menu.Item key="create_post">
              <Link to="/create_post">
                Create New Post
              </Link>
            </Menu.Item>
          )
        }
        {user ? (
          <span className='main_nav_signout_button' onClick={handleSignOut}>
            Sign Out
          </span>
        ) : (
          <Menu.Item key="sign_in" style={{float: 'right'}}>
            <Link to="/sign_in">
              Sign In
            </Link>
          </Menu.Item>
        )}
    </Menu>
  </nav>
  )
}

export default AppNav;