import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import db from '../firebase';

const PostSnippet = (props) => {

  console.log({
    uid: props.uid,
    post_id: props.id
  });

  const handleDeletePost = () => {
    db.collection("users").doc(props.user.uid).collection("posts").doc(props.id).delete().then(() => {
      alert("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <div className="post_snippet_container">
      <Card
        style={{marginTop: 16}}
        type="inner"
        title={props.title}
        extra={<div className="post_snippet_links_container">
            {props.user && <Link to={`/update_post/${props.id}`} style={{marginRight: '15px', color: "gray"}}>Edit</Link>}
            {props.user && <span onClick={handleDeletePost} style={{marginRight: '15px', color: "red", cursor: "pointer"}}>Delete</span>}
        <Link to={`/blogs/${props.uid}/post/${props.id}`}>Read Full Article</Link>
        </div>
        }
      >
        <p>
          {props.content}
        </p>
      </Card>
    </div>
  );
}

export default PostSnippet;