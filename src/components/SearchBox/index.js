import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';

class SearchBox extends Component {
  render() {
    const { classes, filterListTask } = this.props;

    return (
      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            id='standard-search'
            label='Search field'
            type='search'
            onChange={(e) => filterListTask(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  filterListTask: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
