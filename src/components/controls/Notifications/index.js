import React, { Component, Fragment } from 'react';
import NotificationSystem from 'react-notification-system';

class Notification extends Component {

  constructor(props) {
    super(props);
    this._notification = null;

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this._notification = this.refs.notificationSystem;
  }

  renderNotifacation = () => {
    const { message, level } = this.props;

    this._notificationSystem.addNotification({
      message,
      level
    });

    this.setState({ show: false });
  }

  render() {
    const { show } = this.props;
    show ? this.renderNotifacation : '';

    return (
      <Fragment>
        
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    );
  }
}

export default Notification;
