/* eslint-disable no-undef */
import { Button, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActionCreators from '../../actions/modal';
import * as taskActionCreators from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../contants';
import styles from './styles';

class Taskboard extends Component {
  componentDidMount() {
    this.props.taskActions.fetchListTask();
  }

  renderBoard() {
    const { classes, task } = this.props;

    return (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.status}>{status.label}</div>
            <div className={classes.wrapperListTask}>
              <TaskList tasks={task.listTask} status={status} key={index} />
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    const { classes, taskActions, modalActions } = this.props;
    const { filterListTask } = taskActions;
    const { showModal } = modalActions;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={() =>
            showModal({ title: 'Add new task', component: <TaskForm /> })
          }
        >
          Add task
        </Button>
        <SearchBox filterListTask={filterListTask} />
        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterListTask: PropTypes.func,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  task: state.task,
});

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActionCreators, dispatch),
  modalActions: bindActionCreators(modalActionCreators, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Taskboard);
