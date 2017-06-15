export const dataReducer = (state={}, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS': {
      return action.payload;
    }
    case 'GET_DATA_FAIL': {
      return action.error;
    }
    case 'CREATE_DATA_SUCCESS': {
      return { added: true };
    }
    case 'CREATE_DATA_FAIL': {
      return { added: false };
    }
    case 'UPDATE_DATA_SUCCESS': {
      return action.payload;
    }
    case 'UPDATE_DATA_FAIL': {
      return action.error;
    }
    case 'DELETE_DATA_SUCCESS': {
      return { deleted: true };
    }
    case 'DELETE_DATA_FAIL': {
      return { deleted: false };
    }
    default: return state;
  }
}
