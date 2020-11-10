import React from 'react';

function Navbar(props) {
  // declare navItems array
  const navItems = [];
  for (let i = 1; i <= 3; i++) {
    const itemStyle = props.activePage === i ? 'nav-item active' : 'nav-item';
    const newItem = (
      <div key={i} item={i} onClick={props.handleSelect} className={itemStyle}>
        Page {i}
      </div>
    );
    navItems.push(newItem);
  }
  // display header
  return <header>{navItems}</header>;
}

export default Navbar;
