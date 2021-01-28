import React from 'react';
import { PageHeader } from 'antd';
import Post from './Post';
import api from '../mock_api';
import _ from 'lodash';

function Posts(props) {
  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: '1px solid rgb(235,237,240'
          }}
          title="Posts"
        />
      </div>
      <div className="articles_container">
        {
          _.map(api,(article) => (
            <Post title={article.title} content={article.content} />
          ))
        }
      </div>
    </div>
  )
}

export default Posts;