import React from 'react';

import s from './style.module.scss';

const Button = ({ label, type, onClick, disabled }) => {
  return (
    <button className={`${s.button} ${disabled ? s.button_disabled : null}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
