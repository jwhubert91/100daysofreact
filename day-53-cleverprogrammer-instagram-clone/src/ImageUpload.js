import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import firebase from 'firebase/app';
import {db,storage} from './firebase'
import './imageUpload.css'

function ImageUpload({username}) {
  const [caption,setCaption] = useState('');
  const [progress,setProgress] = useState(0);
  const [image,setImage] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function...
        console.log(error);
        alert(error.message);
      },
      () => {
        // Complete function...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // post image in db
            console.log("Image saved to storage with url: "+url);
            console.log({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            })
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            })

            // Reset everything once upload is complete
            setProgress(0);
            setCaption("");
            setImage(null);
          })
      }
    )
  }

  return (
    <div className='imageupload'>
      <progress className='imageupload__progress'  value={progress} max="100" />
      <input type='text' placeholder='Enter a caption...' value={caption} onChange={e => setCaption(e.target.value)}/>
      <input type='file' onChange={handleChange} />
      <Button className='imageupload__button' onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}

export default ImageUpload
