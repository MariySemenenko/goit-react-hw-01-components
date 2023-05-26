
import PropTypes from 'prop-types';

import { Status } from './FriendListItem.styled'

export const FriendListItem = ( { avatar, name, isOnline }) => {
    return (
        <li className="item">
        <Status isOnline={isOnline}>{isOnline}</Status>
        <img className={avatar} src={avatar} alt="User avatar" width="48" />
        <p >{name}</p>
      </li>
    )
  }



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}