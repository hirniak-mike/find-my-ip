import * as yup from 'yup';

const requiredMessage = 'This field is empty';

export const ip_details_scheme = yup.object().shape({
  ip: yup.string().required(requiredMessage),
});

