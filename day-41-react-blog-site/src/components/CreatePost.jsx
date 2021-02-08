import React, {useState} from 'react';
import {Input,Button} from 'antd';
import db from '../firebase';
import {Redirect} from 'react-router-dom'
import PageTitle from './PageTitle';
const Filter = require('bad-words');
const {TextArea} = Input;
const filter = new Filter();

const CreatePost = (props) => {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [toHome,setToHome] = useState(false);

  const handleInputChange = e => {
    const {name,value} = e.currentTarget;
    name === 'title' && setTitle(value);
    name === 'content' && setContent(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const postRef = db.collection('users').doc(props.user.uid).collection('posts');
    // payload object below is cleaned with the npm bad-words package
    const cleanPayload = {
      title: filter.clean(title),
      content: filter.clean(content)
    }

    postRef.add(cleanPayload)
    .then((savedDocRef) => {
      console.log(`Document ${savedDocRef.id} saved to Firestore.`)
      setTitle('');
      setContent('');
      setToHome(true);
    })
    .catch((err) => alert("Error saving to db: ",err));
  }

  return (
    <div className="create_post_container">
      {toHome && <Redirect to="posts" />}
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
              Publish Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;