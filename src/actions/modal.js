import { SHOW_MODAL, HIDE_MODAL } from '../contants/modal';

export const showModal = ({ title, component }) => ({
  type: SHOW_MODAL,
  title,
  component,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
