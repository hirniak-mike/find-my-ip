import React from 'react';
import classNames from 'classnames';

import s from './style.module.scss';

const DetailItem = ({ detail, value }) => {
  return (
    <li className={classNames(s.detail_item, {
      [s.bool]: typeof value === 'boolean' || 'object',
      [s.str]: typeof value === 'string',
      [s.num]: typeof value === 'number',
    })}>
      <span className={s.icon}>
        {typeof value === 'string' ? '“' : typeof value === 'number' ? '#' : 'tf'}
      </span>
      <p className={s.detail_text}>
        {detail}:
      </p>
      <span className={s.value}>{`${value}`}</span>
    </li>
  );
};

export default DetailItem;
