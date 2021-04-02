const SEND_MESSAGE = "SEND_MESSAGE";
const EDIT_MESSAGE = "EDIT_MESSAGE";
const SEND_EDIT_MESSAGE = "SEND_EDIT_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

const initialState = {
  business: [],
  flood: [],
  editMessage: { message: "", index: null },
  collegsMessages: [
    "Привет!",
    "Как дела?",
    "Чем занимаешься?",
    "Где таски?",
    "Добрый день, коллеги!",
    "Всем пока!",
    "Все на митинг!",
    "Давайте по кофе)",
    ":)",
    "Шеф пришел"
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            business: [...state.business, action.messages],
          })
        : (state = {
            ...state,
            flood: [...state.flood, action.messages],
          });

    case EDIT_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            editMessage: {
              ...state.editMessage,
              message: state.business[action.index].message,
              index: action.index,
            },
          })
        : (state = {
            ...state,
            editMessage: {
              ...state.editMessage,
              message: state.flood[action.index].message,
              index: action.index,
            },
          });

    case SEND_EDIT_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            business: state.business.map((it, index) =>
              index === action.index ? ({...it, message: action.message}) : it
            ),
            editMessage: {
              ...state.editMessage,
              message: "",
              index: null,
            },
          })
        : (state = {
            ...state,
            flood: state.flood.map((it, index) =>
              index === action.index
                ? ({...it, message: action.message}) : it
                ),
            editMessage: {
              ...state.editMessage,
              message: "",
              index: null,
            },
          });
    case DELETE_MESSAGE:
      return action.chat === "/business"
        ? (state = {
            ...state,
            business: state.business.filter(
              (it, index) => index !== action.index
            ),
          })
        : (state = {
            ...state,
            flood: state.flood.filter((it, index) => index !== action.index),
          });
    default:
      return state;
  }
};

export function sendMessage(message, collegs, chat) {
  return { type: SEND_MESSAGE, messages: { message, collegs }, chat };
}

export function editMessage(message, index, chat) {
  return { type: EDIT_MESSAGE, message, index, chat };
}

export function sendEditMessage(message, index, chat) {
  return { type: SEND_EDIT_MESSAGE, message, index, chat };
}

export function deleteMessage(index, chat) {
  return { type: DELETE_MESSAGE, index, chat };
}

export default messageReducer;
