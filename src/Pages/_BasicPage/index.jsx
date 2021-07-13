import React from 'react';

import s from './style.module.scss';

const BasicPage = ({ children }) => {
  return (
    <div className={s.basic_page}>
      {children}
    </div>
  );
};

export default BasicPage
