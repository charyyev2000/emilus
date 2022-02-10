const {
  ADD_CLIENTS,
  LOADING_CLIENTS,
  EDITING_CLIENTS,
  UPDATE_EDITING_CLIENTS,
  SAVE_EDITING_CLIENTS,
} = require("redux/constants/client");

const initialState = { loading: false, clients: [], editingClient: {} };

const client = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    case EDITING_CLIENTS:
      return {
        ...state,
        editingClient: action.payload,
      };
    case UPDATE_EDITING_CLIENTS:
      return {
        ...state,
        editingClient: { ...state.editingClient, [action.key]: action.payload },
      };
    case SAVE_EDITING_CLIENTS:
      return {
        ...state,
        clients: state.clients.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case LOADING_CLIENTS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default client;
