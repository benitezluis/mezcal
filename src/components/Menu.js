import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/menu';
import Img from '../assets/user.jpg';

class MenuApp extends Component {

  handleClickItem = (e, { name, to }) => {
    const { changeActiveItem, history } = this.props;
    changeActiveItem(name);
    history.push(to);
  };

  handleClickSingout = (e) => {
    // close session
  };

  render() {
    const { active } = this.props;

    console.log('estas son mis props', this.props);

    return (
      <Menu borderless>
        <Menu.Item name="home" to="/" active={active === "home"} onClick={this.handleClickItem} />
        <Menu.Item name="blabla" to="/blabla" active={active === "blabla"} onClick={this.handleClickItem} />
        <Menu.Menu>
          <Dropdown item text="Catalogs">
            <Dropdown.Menu>
              <Dropdown.Item name="catalogs" to="/clients" onClick={this.handleClickItem}>Clientes</Dropdown.Item>
              <Dropdown.Item name="catalogs" to="/providers" onClick={this.handleClickItem}>Proveedores</Dropdown.Item>
              <Dropdown.Item name="catalogs" to="/products" onClick={this.handleClickItem}>Productos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item>
            <Label as="a">
              Luis Benitez
            </Label>
          </Menu.Item>

          <Dropdown item icon='configure'>
            <Dropdown.Menu>
              <Dropdown.Item name="users" to="/users" onClick={this.handleClickItem}>Usuarios</Dropdown.Item>
              <Dropdown.Item name="permissions" to="/permissions" onClick={this.handleClickItem}>Permisos</Dropdown.Item>
              <Dropdown.Item name="roles" to="/roles" onClick={this.handleClickItem}>Roles</Dropdown.Item>
              <Dropdown.Item name="singout" to="/singout" onClick={this.handleClickSingout}>Cerrar Sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.menu.active,
    clients: state.clients
  };
};

export default connect(mapStateToProps, actions)(withRouter(MenuApp));
