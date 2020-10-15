import { withStyles } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import PropTypes from 'prop-types';
import LoadingIcon from '../../assets/images/loading.gif';

class GlobalLoading extends Component {
  render() {
    const { classes, loading } = this.props;

    return (
      <Fragment>
        {loading && (
          <div className={classes.globalLoading}>
            <img src={LoadingIcon} alt='loading' className={classes.icon} />
          </div>
        )}
      </Fragment>
    );
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
});

export default withStyles(styles)(
  connect(mapStateToProps, null)(GlobalLoading)
);
