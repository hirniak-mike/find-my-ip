import React from 'react';

import { HeaderFindIp, SearchIP, ShowDetails } from '../../Components';

import s from './style.module.scss';

const FindIp = () => {
  return (
    <div className={s.find_ip}>
      <HeaderFindIp />
      <SearchIP />
      <ShowDetails />
    </div>
  );
};

export default FindIp;
