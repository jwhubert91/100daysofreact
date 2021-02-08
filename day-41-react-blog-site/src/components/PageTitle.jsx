import React from 'react'
import {PageHeader} from 'antd';

function PageTitle({title}) {
  return (
    <div className="page_header_container">
    <PageHeader
      style={{
        border: '1px solid rgb(235,237,240)'
      }}
      title={title}
    />
  </div>
  )
}

export default PageTitle
