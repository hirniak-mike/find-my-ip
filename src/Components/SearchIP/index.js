import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { getIpDetailsAction } from '../../Store/findIpSlice';
import { BasicInputIP, Button } from '../../Components';
import { ip_details_scheme } from '../../Res/Consts/validationsForm';

import s from './style.module.scss';

const SearchIP = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(({ findIpSlice }) => {
    return {
      isLoading: findIpSlice.isLoading,
    };
  });

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(ip_details_scheme),
  });

  const searchIP = ({ ip }) => {
    dispatch(getIpDetailsAction(ip));
  };

  return (
    <form
      className={s.search_ip}
      onSubmit={handleSubmit(searchIP)}
    >
      <div className={s.input_wrapper}>
        <BasicInputIP
          type='text'
          focus
          placeholder='8.8.8.8'
          error={errors.ip}
          register={register('ip')}
        />
      </div>
      <div className={s.btn_wrapper}>
        <Button label='Search' type='submit' disabled={isLoading} />
      </div>
    </form>
  );
};

export default SearchIP;
