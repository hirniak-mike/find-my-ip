import React from 'react';

import { FindIp } from '../../Components';

import s from './style.module.scss';

const FindIpPage = () => {
  return (
    <main className={s.find_ip_page}>
      <FindIp />
    </main>
  );
};

export default FindIpPage;
