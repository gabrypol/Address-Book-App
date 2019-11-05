import React, { Component } from 'react';
import UserDetailModal from './UserDetailModal';

class User extends Component {
  showUserDetail = event => {
    const user_email = event.currentTarget.getAttribute('data-value');
    const user_detail = document.getElementById('user_' + user_email);
    user_detail.classList.remove('hidden');
  };

  render() {
    const { picture, name, login, email } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-card'>
        <img src={picture.large} alt={full_name} />
        <div className='user-info-details'>
          <h4 className='name js-full-name'>{full_name}</h4>
          <h5 className='username'>{login.username}</h5>
          <h5 className='email'>{email}</h5>
          <div
            className='user-info-actions'
            onClick={this.showUserDetail}
            data-value={email}
          >
            <span>+</span>
          </div>
        </div>
        <UserDetailModal details={this.props.details} />
      </div>
    );
  }
}

export default User;
