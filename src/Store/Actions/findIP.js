import { getIpDetails } from '../../Api/apiService';

const getIpDetailsSuccess = (data) => ({
  type: 'GET_IP_DETAILS',
  payload: data,
});

const getIpDetailsError = () => ({
  type: 'GET_ERROR',
});

const setIsLoading = (isLoading) => ({
  type: 'SET_IS_LOADING',
  payload: isLoading,
});

export const getIpDetailsAction = (ip) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    getIpDetails(ip).then(({ data }) => {
      if (data?.error) {
        dispatch(setIsLoading(false));
        dispatch(getIpDetailsError());
      } else {
        dispatch(setIsLoading(false));
        dispatch(getIpDetailsSuccess(data))
      };
    });
  };

};