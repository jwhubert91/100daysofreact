import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

const PostSnippet = (props) => {
  return (
    <div className="post_snippet_container">
      <Card
        style={{marginTop: 16}}
        type="inner"
        title={props.title}
        extra={<Link to={`/post/${props.id}`}>Read Full Description</Link>}
      >
        <p>
          {props.content}
        </p>
      </Card>
    </div>
  );
}

export default PostSnippet;