import {
  Button,
  Grid,
  MenuItem,
  TextField,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../contants/index';
import styles from './styles';
import * as modalActionCreators from '../../actions/modal';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

class TaskForm extends Component {
  state = {
    status: 0,
  };

  handleChangeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render() {
    const {
      classes,
      modalActions: { hideModal },
    } = this.props;
    const { status } = this.state;

    return (
      <form>
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='title'
          fullWidth
          className={classes.textField}
        />
        <TextField
          id='standard-select-currency'
          select
          label='Status'
          value={status}
          onChange={this.handleChangeStatus}
          fullWidth
          className={classes.textField}
        >
          {STATUSES.map((status) => (
            <MenuItem key={status.value} value={status.value}>
              {status.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='standard-multiline-static'
          label='Description'
          multiline
          rows={4}
          fullWidth
          className={classes.textField}
        />
        <Grid container justify='flex-end'>
          <Button onClick={hideModal} color='primary'>
            Cancel
          </Button>
          <Button onClick={hideModal} color='primary'>
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
};

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActionCreators, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
