const initialState = {
  ipDetails: [],
  isLoading: false,
  isError: false,
};

const findIP = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IP_DETAILS':
      return {
        ...state,
        ipDetails: Object.entries(action.payload).map(([key, value]) => ({ key: key, value: value })),
        isError: false,
      };

    case 'GET_ERROR':
      return {
        ...state,
        isError: true,
      };

    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state;
  }
};

export default findIP;
