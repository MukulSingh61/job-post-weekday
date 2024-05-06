const initialState = {
    items: [],
    isLoading: false,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          items: [...state.items, ...action.payload],
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  