import {
  Dialog,
  DialogContent,
  DialogTitle,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActionCreators from '../../actions/modal';
import styles from './styles';

class Modal extends Component {
  render() {
    const { classes, modal, modalActions } = this.props;
    const { open, title, component } = modal;
    const { hideModal } = modalActions;

    return (
      <Dialog
        open={open}
        onClose={hideModal}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {component}
        </DialogContent>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  classes: PropTypes.object,
  modal: PropTypes.shape({
    open: PropTypes.bool,
    component: PropTypes.object,
    title: PropTypes.string,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActionCreators, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Modal);
