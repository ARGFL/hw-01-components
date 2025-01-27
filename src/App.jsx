import React from 'react';
import Profile from './components/profile/Profile'
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';


import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from './components/transactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
