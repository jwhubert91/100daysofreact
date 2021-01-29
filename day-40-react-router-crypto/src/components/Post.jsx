import React, {useState,useEffect} from 'react';
import {Card,PageHeader} from 'antd';
import {useParams} from 'react-router-dom';
import api from '../mock_api';

const Post = (props) => {
  
  const postId = useParams().id;
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [imageUrl,setImageUrl] = useState('');

  useEffect(() => {
    let post = api[postId];
    setTitle(post.coin);
    setContent(post.description);
  },[postId])

  return (
    <div className="post_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: '1px solid rgb(235,237,240)'
          }}
          title={title}
        />
      </div>
      <div className="post_content_container">
        <Card style={{marginTop: '20px'}} >
          {
            content.split('\n').map((textParagraph,idx) => {
              return <p key={idx}>{textParagraph}</p>
            })
          }
        </Card>
      </div>
    </div>
  )
}

export default Post;