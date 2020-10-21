import { Button, CircularProgress, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../contants/index';
import styles from './styles';
import * as modalActionCreators from '../../actions/modal';
import * as taskActionCreators from '../../actions/task';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import renderSelectField from '../FormHelper/SelectField';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    data.status = parseInt(data.status);
    this.props.taskActions.addTask(data);
  };

  render() {
    const {
      classes,
      modalActions: { hideModal },
      task: { loadingBtn },
      handleSubmit,
      invalid,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Field
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='text'
          fullWidth
          className={classes.textField}
          name='title'
          component={renderTextField}
        />
        <Field
          id='standard-select-currency'
          select
          label='Status'
          fullWidth
          className={classes.textField}
          name='status'
          component={renderSelectField}
        >
          {STATUSES.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </Field>
        <Field
          id='standard-multiline-static'
          label='Description'
          multiline
          rows={4}
          fullWidth
          className={classes.textField}
          name='description'
          component={renderTextField}
        />
        <Grid container justify='flex-end'>
          <Button onClick={hideModal} color='primary'>
            Cancel
          </Button>
          <div className={classes.wrapper}>
            <Button
              color='primary'
              type='submit'
              disabled={invalid || submitting || loadingBtn}
            >
              Add
            </Button>
            {loadingBtn && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskActions: PropTypes.shape({
    addTask: PropTypes.func,
  }),
  task: PropTypes.shape({
    loadingBtn: PropTypes.bool,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActionCreators, dispatch),
  taskActions: bindActionCreators(taskActionCreators, dispatch),
});

const mapStateToProps = (state) => ({
  task: state.task,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: 'task',
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
