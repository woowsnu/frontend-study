import React from 'react';
import { Link } from 'react-router-dom';

const PagesList = () => {
  return (
    <ul>
      <Link to='/expense'>
        <li>가계부</li>
      </Link>
      <Link to='/adduser'>
        <li>사용자모달</li>
      </Link>
      <Link to='/side'>
        <li>사이드이펙트</li>
      </Link>
    </ul>
  );
};

export default PagesList;
