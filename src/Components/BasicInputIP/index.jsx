import React from 'react';
import MaskedInput from 'react-text-mask';

import { maskedSettingIP } from '../../Res/Consts/maskedInputSetting';

import s from './style.module.scss';

const BasicInputIP = ({ type, placeholder, register, error, focus }) => {
  return (
    <p className={s.input_wrapper}>
      <MaskedInput
        {...maskedSettingIP}
        type={type}
        placeholder={placeholder}
        className={`${s.input} ${error ? s.input_error : null}`}
        autoFocus={focus}
        {...register}
      />
      {error ? <span className={s.error}>{error.message}</span> : null}
    </p>
  );
};

export default BasicInputIP;
