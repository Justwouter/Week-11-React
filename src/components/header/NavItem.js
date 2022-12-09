import React from 'react';
import { Link } from 'react-router-dom';

function NavItem(NavListItem) {
  return (
    <>
      <li className="NavListItem">
        <Link className="NavListLink" to={NavListItem.link}>{NavListItem.text}</Link>
      </li>
      

    </>



  );
}

export default NavItem;
