import React,{useState,useEffect} from 'react'
import {db} from './firebase'
import Avatar from '@material-ui/core/Avatar'
import './Post.css';

function Post({username,caption,imageUrl,postId,currentUser}) {

  const [comments,setComments] = useState([]);
  const [comment,setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()))
        })
    }

    return () => {
      console.log(comments);
      unsubscribe();
    };
  },[postId])

  useEffect(() => {
    console.log("The username in post props is: "+username)
  },[])

  const postComment = (e) => {
    e.preventDefault();
    db
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .add({
      text: comment,
      username: username
    })
  }

  const flagPost = () => {
    window.confirm(`Are you sure?`,() => {
      db.collection("posts").doc(postId).delete().then(() => {
        alert("Thanks for reporting that post as inappropriate! We've removed it thanks to your vigilance.")
      })
    })
  }

  return (
    <div className='post'>
      {/* header = avatar + username */}
      <div className='post__header'>
        <div className='post__posterInfo'>
          <Avatar 
            className='post__avatar'
            alt='Jwhubert91'
            src='/static/images/avatar/1.jpg'
          />
          <h3>{username}</h3>
        </div>
        <button 
          className='post__flagButton'
          onClick={flagPost}
        >
          Flag as inappropriate
        </button>
      </div>
      {/* image */}
      <img
        src={imageUrl}
        className='post__image'
        alt={username+"'s picture"}
      />

      {/* username + caption */}
      <h4 className='post__text'>
        <strong>{username} </strong>
          {caption}
      </h4>

      {/* post comments */}
      <div className='post__comments'>
        {comments.map((thisComment,idx) => (
          <p className='post__commentContainer' key={idx}>
            <strong>{thisComment.username}</strong> {thisComment.text}
          </p>
        ))}
      </div>

      {/* add a comment */}
      <form className='post__commentBox'>
        <input 
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment || !currentUser}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
