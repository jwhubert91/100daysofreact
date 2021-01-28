import React from 'react';
import {Card} from 'antd';

const Post = (props) => {
  return (
    <div className="article_container">
      <Card
        style={{marginTop: 16}}
        type="inner"
        title={props.title}
        extra={<a href="#">More</a>}
      >
        <p>
          {props.content}
        </p>
      </Card>
    </div>
  );
}

export default Post;