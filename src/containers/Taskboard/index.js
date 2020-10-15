/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../contants';
import AddIcon from '@material-ui/icons/Add';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListTask } from '../../actions/task';

class Taskboard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.props.fetchListTask();
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

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

  renderForm() {
    return <TaskForm open={this.state.open} onCloseForm={this.handleClose} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={this.handleClickOpen}
        >
          Add task
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  fetchListTask: PropTypes.func,
};

const mapStateToProps = (state) => ({
  task: state.task,
});

export default withStyles(styles)(
  connect(mapStateToProps, { fetchListTask })(Taskboard)
);
