import React from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';

function Posts(props) {
  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: '1px solid rgb(235,237,240)'
          }}
          title="Coins DB"
        />
      </div>
      <div className="articles_container">
        {
          _.map(api,(article,idx) => (
            <PostSnippet 
              key={idx} 
              id={article.id}
              title={article.coin} 
              content={article.description} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Posts;