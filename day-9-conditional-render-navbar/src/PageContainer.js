import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function PageContainer(props) {
  let renderPage;
  if (props.activePage === 1) {
    renderPage = <Page1 />;
  } else if (props.activePage === 2) {
    renderPage = <Page2 />;
  } else if (props.activePage === 3) {
    renderPage = <Page3 />;
  }
  return <div className='page-container'>{renderPage}</div>;
}

export default PageContainer;
