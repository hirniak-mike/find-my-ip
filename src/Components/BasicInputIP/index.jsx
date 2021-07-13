import React from 'react';

import s from './style.module.scss';

const BasicInputIP = ({ type, placeholder, register, error, focus }) => {
  return (
    <p className={s.input_wrapper}>
      <input className={`${s.input} ${error ? s.input_error : null}`}
        type={type}
        placeholder={placeholder}
        autoFocus={focus}
        {...register}
      />
      {error ? <span className={s.error}>{error.message}</span> : null}
    </p>
  );
};

export default BasicInputIP;
