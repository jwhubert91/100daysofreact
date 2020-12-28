import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpg', 'image/jpeg'];

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      // setFile(selected);
      setFile(null);
      alert(
        `Thanks for checking out my Instagram clone! Unforunately, we've had to stop accepting new uploads to ensure security of the application. Please check out my other work at https://www.dev.to/jwhubert91 for more projects!`
      );
    } else {
      setFile(null);
      setError('Please select an image (png, jpg or jpeg) file type.');
    }
  };

  return (
    <form className='upload-form'>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
