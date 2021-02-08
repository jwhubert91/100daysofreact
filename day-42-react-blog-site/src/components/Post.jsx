import React, {useState,useEffect} from 'react';
import {Card} from 'antd';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import PageTitle from './PageTitle';

const Post = (props) => {
  
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const userId = useParams().uid;
  const postId = useParams().id;

  useEffect(() => {
    let postRef = db
      .collection('users')
      .doc(userId)
      .collection('posts')
      .doc(postId);

    postRef.get().then(doc => {
      const {title,content} = doc.data();
      setTitle(title);
      setContent(content);
    })
  },[postId]);

  return (
    <div className="post_container">
      <PageTitle title={title} />
      <div className="post_content_container">
        <Card style={{marginTop: '20px'}} >
          { content }
        </Card>
      </div>
    </div>
  )
}

export default Post;