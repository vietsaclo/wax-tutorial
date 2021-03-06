import { Button, message } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { WaxServices } from '../services';
import { ActionsType } from "../common/actions-type";
import { PublicModules } from '../common';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.state = {
      userLoged: null,
    }
  }

  componentDidMount() {
    const userLoged = PublicModules.fun_getUserLoginLocalStorage();
    if (userLoged) {
      // relogin by public keys
      WaxServices.fun_loginWaxWithPubKeysAsync(userLoged)
        .then((result) => {
          // error ?
          if (!result) {
            message.error('Login failure!');
            // remember logout (clean local storage).
            this.dispatch({
              type: ActionsType.USER_LOGOUT,
              value: null,
            });
            return;
          }
          this.dispatch({
            type: ActionsType.USER_LOGIN,
            value: result,
          });
        });
    }
  }

  buidMenuItemUI(gitBranch) {
    return (
      <div className='float-left menu-item'>
        <NavLink to={'/' + gitBranch}
          activeStyle={{
            fontWeight: "bold",
            color: 'yellow',
            textTransform: 'uppercase',
          }}
        >GB {gitBranch}</NavLink>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user;
    if (user.userName != this.state.userLoged) {
      this.setState({
        userLoged: user.userName,
      });
    }
  }

  btnLogoutClicked() {
    this.dispatch({
      type: ActionsType.USER_LOGOUT,
    });
    message.success('Logout successfully');
  }

  getUserLogedUI() {
    if (this.state.userLoged)
      return (
        <Button
          onClick={() => this.btnLogoutClicked()} type='primary' className='text-white fw-bold'>
          {this.state.userLoged}
        </Button>
      );
    return (
      <Button onClick={() => this.btnLoginClicked()} type='ghost'
        style={{ color: 'white' }}
      >Login</Button>
    );
  }

  async btnLoginClicked() {
    const userLoged = await WaxServices.fun_loginWaxAsync();
    if (!userLoged) {
      message.error('Login Error!');
      return;
    }
    message.success('Wellcome: ' + userLoged.userName);
    // dispatch store user
    this.dispatch({
      type: ActionsType.USER_LOGIN,
      value: userLoged,
    });
  }

  render() {
    return (
      <div className='container-fluid menu'>
        <div className='menu-item float-left'>
          <NavLink to='/'
            isActive={(_match, location) => {
              return location.pathname === '/';
            }}
            activeStyle={{
              fontWeight: "bold",
              color: 'yellow',
              textTransform: 'uppercase',
            }}
          >Docs</NavLink>
        </div>

        <div className='menu-item' style={{ float: 'right' }}>{this.getUserLogedUI()}</div>

        {this.buidMenuItemUI('003')}

        {this.buidMenuItemUI('004')}

        {this.buidMenuItemUI('005')}
        <div className='clear'></div>
      </div >
    );
  }
}

const mapStateToProps = (state, _ownProps) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MenuComponent);