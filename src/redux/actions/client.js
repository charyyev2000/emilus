import {
  ADD_CLIENTS,
  EDITING_CLIENTS,
  LOADING_CLIENTS,
  SAVE_EDITING_CLIENTS,
  UPDATE_EDITING_CLIENTS,
} from "redux/constants/client";

export const addClient = (client) => {
  return {
    type: ADD_CLIENTS,
    payload: client,
  };
};

export const editingClient = (client) => {
  return {
    type: EDITING_CLIENTS,
    payload: client,
  };
};

export const updateEditingClient = (key, data) => {
  return {
    type: UPDATE_EDITING_CLIENTS,
    payload: data,
    key: key,
  };
};
export const saveEditingClient = (data) => {
  return {
    type: SAVE_EDITING_CLIENTS,
    payload: data,
  };
};

export const loadingClient = (client) => {
  return {
    type: LOADING_CLIENTS,
    payload: client,
  };
};
