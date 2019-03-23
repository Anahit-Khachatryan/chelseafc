import React, { Component } from 'react';

const menu = [{
    key: 1,
    value: "Home",
    
  }, {
    key: 2,
    value: "Team",
  }, {
    key: 3,
    value: "Result",
  },
  ];

const Header = () => (
      <ul  >
        {
            menu.map(({ key, value }) => (<li  key={key}> <a href={'#'}>{value}</a> </li>))
        }
    </ul>
    
); 
export default Header;
