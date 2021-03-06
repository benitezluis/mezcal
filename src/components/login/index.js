import React, { Component, Fragment } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import Auth from '../../config/session';
import Request from '../../api/request';
import NotificationSystem from 'react-notification-system';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      user: '',
      password: ''
    };
  }

  changeValue(field, value) {
    this.setState({ [field]: value });
  }

  handleLogin = async () => {
    const { history } = this.props;
    const { user, password } = this.state;
    const details = {
      username: user,
      password: password,
      grant_type: 'password'
    };

    const formBody = await this.setFormBody(details);

    Request.postLogin({
      data: formBody
    })
    .then(response => {
      if (response.status === 200) {
        Auth.setLogin(response.res);
        history.push('/');
      }
    })
    .catch(error => {
      this.refs.notificationSystem.addNotification({
        message: 'Usuario no válido, por favor verifique que los datos sean correctos',
        level: 'warning'
      });
      console.log('Ocurrio un error', error);
    });
  }

  setFormBody(details) {
    var formBody = [];
	  for (let property in details) {
  	  var encodedKey = encodeURIComponent(property);
  	  var encodedValue = encodeURIComponent(details[property]);
  	  formBody.push(encodedKey + "=" + encodedValue);
  	};

	  return formBody.join("&");
  }

  render() {
    return (
      <Fragment>
        <div className="ui four column centered grid">
          <div className="column" style={{marginTop: 100}}>
            <Form>
              <Form.Field>
                <Input
                  icon="user"
                  placeholder="Usuario"
                  onChange={e => this.changeValue('user', e.target.value)}
                  />
              </Form.Field>
              <Form.Field>
                <Input
                  type="password"
                  icon='lock'
                  placeholder="Contraseña"
                  onChange={e => this.changeValue('password', e.target.value)}
                  />
              </Form.Field>
              <Form.Field>
                <Button fluid primary onClick={this.handleLogin}>Iniciar sesión</Button>
              </Form.Field>
            </Form>
          </div>
        </div>
        <NotificationSystem ref="notificationSystem" />
      </Fragment>
    );
  }
}

export default withRouter(Login);
