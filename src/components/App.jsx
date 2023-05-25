import user from '../data/user.json';
import { Profile } from './Profile/Profile';

import data from '../data/statistics.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import {FriendList} from './FriendList/FriendList'


export const App = () => {
  return (
<div>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> 

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

<FriendList friends={friends} />;

    </div>
  );
};



    