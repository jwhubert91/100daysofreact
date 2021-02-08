import React,{useState,useEffect} from 'react';
import PostSnippet from './PostSnippet';
import PageTitle from './PageTitle';
import {useParams} from 'react-router-dom';
import _ from 'lodash';
import db from '../firebase';

function Posts(props) {

  const [posts,setPosts] = useState([]);
  const {uid} = useParams();

  useEffect(() => {
    let userId = props.user?.uid ? props.user?.uid : uid;
    let postsRef = db.collection("users").doc(userId).collection('posts');

    postsRef
    .onSnapshot(async posts => {
      let postsData = await posts.docs.map(post => {
        let data = post.data();
        let {id} = post;

        let payload = {
          id,
          ...data
        }

        return payload
      })
      setPosts(postsData);
    })
  },[])

  return (
    <div className="posts_container">
      <PageTitle title="Posts" />
      <div className="articles_container">
        {
          _.map(posts,({id,title,content}) => (
            <PostSnippet 
              key={id} 
              id={id}
              title={_.startCase(_.toLower(title.substring(0,50)))+`${title.length > 50 ? '...' : ''}`} 
              content={content.substring(0,250)}
              user={props.user}
              uid={uid}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Posts;




// Original code from this component - uses get instead of onSnapshot
  /*
  useEffect(() => {
      Original code below - we replaced .get() with .onSnapshot() because
      this allows us to subscribe to events in realtime.
      postRef
      .get()
      .then(posts => {
        posts.forEach(post => {
          let data = post.data();
          const {id} = post;
          let payload = {
            id,
            ...data
          }
          setPosts((posts) => [...posts,payload])
        })
      })
  },[])
  */