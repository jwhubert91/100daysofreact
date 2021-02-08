import React, {useState,useEffect} from 'react';
import {Input,Button} from 'antd';
import db from '../firebase';
import {useParams} from 'react-router-dom'
import PageTitle from './PageTitle';
const Filter = require('bad-words');
const {TextArea} = Input;
const filter = new Filter();

const UpdatePost = (props) => {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const postId = useParams().id;

  useEffect(() => {
    let postRef = db
      .collection("users")
      .doc(props.user.uid)
      .collection('posts')
      .doc(postId);

    postRef.get().then(doc => {
      const {title,content} = doc.data();
      setTitle(title);
      setContent(content);
    })
  },[postId,props.user.uid]);

  const handleInputChange = e => {
    const {name,value} = e.currentTarget;
    name === 'title' && setTitle(value);
    name === 'content' && setContent(value);
  }

  // on form submit - update post in db
  const handleSubmit = e => {
    e.preventDefault();
    const postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(postId);
    // payload object below is cleaned with the npm bad-words package
    const cleanPayload = {
      title: filter.clean(title),
      content: filter.clean(content)
    }

    postRef.update(cleanPayload)
    .then((savedDocRef) => {
      console.log(`Document successfully updated.`)
    })
    .catch((err) => {
      console.error(err);
      alert("Error saving to database.")
    });
  }

  return (
    <div className="create_post_container">
      <PageTitle title="Create Post" />
      <div className="post_inputs_container">
        <div className="post_input_container">
          <div>
            <h2>Title</h2>
          </div>
          <div className="post_input">
            <Input placeholder="Post title" name="title" onChange={handleInputChange} value={title} />
          </div>
        </div>
        <div className="post_input_container">
          <div>
            <h2>Content</h2>
          </div>
          <div className="post_input">
            <TextArea rows={10} name="content" onChange={handleInputChange} value={content} />
          </div>
          <div className="post_input_button">
            <Button type="primary" block onClick={handleSubmit}>
              Update Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;