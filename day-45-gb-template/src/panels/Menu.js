import React from 'react'
import ResponsiveCTAs from '../components/ResponsiveCTAs'
import './styles/Menu.css';

function Menu(props) {

  const {menuColumnsData} = props;
  console.log(menuColumnsData);

  const filledMenuData = menuColumnsData.map((menuColumn) => {
    return (
      <div className={'menu-column-'+menuColumn.column} key={'column-'+menuColumn.column}>
        {menuColumn.sections.map((section) => (
          <div key={section.sectionName+' section'}>
            <h5 className='menu-subsection-header'>{section.sectionName}</h5>
            {section.sectionItems.map((item,idx) => (
              <div className='menu-item' key={'section-'+section.sectionName+' item-'+idx}>
                <div className='menu-item-top'>
                  <span className='menu-item-header'>{item.itemName}</span>
                  <span className='menu-item-price'>{item.itemPrice}</span>
                </div>
                <span className='menu-item-description'>{item.itemDescription}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  })

  return (
    <div className='menu-panel-container full-height' id='Menu'>
      <div className='menu-panel-header'>
        <h3 className='section-header'>{props.menuHeaderText}</h3>
        <p className='section-header-subtitle'>{props.menuHeaderSubtitle}</p>
        <ResponsiveCTAs />
      </div>
      <div className='menu-body'>
        {filledMenuData}
      </div>
      <p className='menu-bottom-text'>
        *Consuming raw or undercooked meat can result in illness.
      </p>
    </div>
  )
}

export default Menu


{/* <div className='menu-body'>
<div className='menu-column-1'>
  <h5 className='menu-subsection-header'>Mains</h5>
  <div className='menu-item'>
    <span className='menu-item-header'>Soup of the Day</span>{' '}
    <span className='menu-item-price'>6.75</span>
    <br />
    <span className='menu-item-description'>Item description goes here...</span>
  </div>
</div>
<div className='menu-column-2'></div>
<div className='menu-column-3'></div>
</div> */}