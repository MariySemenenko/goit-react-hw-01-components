
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
       {friends.map(({id, avatar, name, isOnline}) => (
         <FriendListItem>
         <span className="status"></span>
         <img className="avatar" src="" alt="User avatar" width="48" />
         <p className="name"></p>
       </FriendListItem>
       ))}
      </ul>
    )
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })),
    
    }