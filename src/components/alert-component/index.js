import React, {Component, createRef} from 'react';

import AlertForm from '../alert-form';
import AlertListPure from '../alert-list';
import withPortal from '../withPortal';

const alertsRoot = document.getElementById('alerts-root');
const AlertList = withPortal(alertsRoot)(AlertListPure);

class AlertComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  state = {
    data: [],
    value: '',
  };

  componentDidMount() {
    this.focusInput();
  }

  focusInput = () => this.inputRef.current.focus();

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    const {data, value} = this.state;

    this.setState({
      data: [value, ...data],
      value: '',
    }, this.focusInput);
  };

  render() {
    const {data, value} = this.state;

    return (
      <>
        <AlertForm
          value={value}
          ref={this.inputRef}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />

        <AlertList data={data}/>
      </>
    )
  };
}

export default AlertComponent;
