import React from 'react';
import { useSelector } from 'react-redux';

import { DetailItem } from '../../Components';

import s from './style.module.scss';

const ShowDetails = () => {
  const { details, isError, isLoading } = useSelector(({ findIP }) => {
    return {
      details: findIP.ipDetails,
      isError: findIP.isError,
      isLoading: findIP.isLoading,
    };
  });

  if (isLoading) {
    return (
      <p className={s.show_message}>
        Loading...
      </p>
    )
  };
  if (isError) {
    return (
      <p className={s.show_message}>
        Something went wrong 😞. Please try again.
      </p>
    )
  };
  if (!details.length) {
    return (
      <p className={s.show_message}>
        Enter IP and press “Search” to get geolocation data
      </p>
    )
  };
  return (
    <ul className={s.show_details}>
      {details.map(({ key, value }) => (
        <DetailItem key={key}
          detail={key}
          value={value} />
      ))}
    </ul>
  );
};

export default ShowDetails;
