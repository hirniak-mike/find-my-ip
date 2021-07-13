import React from 'react';

import ImgBuilder from '../../Res/Img/_ImgBuilder';

import s from './style.module.scss';

const HeaderFindIp = () => {
  return (
    <header className={s.header}>
      <img src={ImgBuilder.logo} alt="Logo" className={s.logo} />
      <h1 className={s.title}>Find My IP</h1>
    </header>
  );
};

export default HeaderFindIp;
