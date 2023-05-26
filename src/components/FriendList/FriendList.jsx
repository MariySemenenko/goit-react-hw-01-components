
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
       {friends.map(({ id, avatar, name, isOnline }) => (
         <FriendListItem   key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
         id={id} />
          
       
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