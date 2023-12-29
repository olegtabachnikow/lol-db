import { Component } from 'react';
import ErrorPage from '../error-page/ErrorPage';

import PropTypes from 'prop-types';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired,
};
