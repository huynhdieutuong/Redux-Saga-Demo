import { SHOW_MODAL, HIDE_MODAL } from '../contants/modal';

const initialState = {
  open: false,
  title: '',
  component: null,
};

export default (state = initialState, action) => {
  const { type, title, component } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        open: true,
        title,
        component,
      };
    case HIDE_MODAL:
      return {
        ...state,
        open: false,
        title: '',
        component: null,
      };
    default:
      return state;
  }
};
