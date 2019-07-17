import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const withPortal = domElem => Comp => {
  class AlertsPortalHOC extends Component {
    render() {
      return (
        ReactDOM.createPortal(
          <Comp {...this.props}/>,
          domElem,
        )
      )
    }
  }

  return AlertsPortalHOC;
};

export default withPortal;
