import React from 'react';
import Logo from '../ui/images/Udemy_logo.svg'

function Sidebar() {
  return (
    <div className='sidebar fixed'>

        <a href='#' className='logo'>
            <img src={Logo} className='bl'/>
        </a>
    
    </div>
  );
}

export default Sidebar;