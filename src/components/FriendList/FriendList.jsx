
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

import { List } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
       {friends.map(({ id, avatar, name, isOnline }) => (
         <FriendListItem   key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
         id={id} />
          
       
       ))}
      </List>
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