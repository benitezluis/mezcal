import React, { Component, Fragment } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class Login extends Component {

  render() {
    return (
      <Fragment>
        <div class="ui four column centered grid">
          <div class="column" style={{marginTop: 100}}>
            <Form>
              <Form.Field>
                <Input icon="user" placeholder="Usuario" />
              </Form.Field>
              <Form.Field>
                <Input icon='lock' placeholder="Contraseña" />
              </Form.Field>
              <Form.Field>
                <Button fluid primary>Iniciar sesión</Button>
              </Form.Field>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);