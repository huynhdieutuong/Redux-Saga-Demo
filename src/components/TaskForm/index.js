import { Button, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../contants/index';
import styles from './styles';
import * as modalActionCreators from '../../actions/modal';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import renderSelectField from '../FormHelper/SelectField';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log(data);
  };

  render() {
    const {
      classes,
      modalActions: { hideModal },
      handleSubmit,
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
          <Button color='primary' type='submit'>
            Add
          </Button>
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
  handleSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActionCreators, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: 'task',
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
