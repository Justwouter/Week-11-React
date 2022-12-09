import React from 'react';
import { Outlet } from 'react-router-dom';

function MainContentBlock() {
  return (
    <div className="MainPageContentArea">
      <Outlet />
    </div>

  );
}

export default MainContentBlock;
