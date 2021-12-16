export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transanctions: state.transanctions.filter(transanction => transanction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transanctions: [action.payload, ...state.transanctions]
      }
    default:
      return state;
  }
}

