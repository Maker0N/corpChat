const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

const initialState = { business: [], flood: [] };

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            business: [...state.business, action.message],
          })
        : (state = {
            ...state,
            flood: [...state.flood, action.message],
          });
    case DELETE_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            business: state.business.filter((it, index) => index !== action.index),
          })
        : (state = {
            ...state,
            flood: state.flood.filter((it, index) => index !== action.index),
          });
    default:
      return state;
  }
};

export function sendMessage(message, chat) {
  return { type: SEND_MESSAGE, message, chat };
}

export function deleteMessage(index, chat) {
  return { type: DELETE_MESSAGE, index, chat };
}

export default messageReducer;
