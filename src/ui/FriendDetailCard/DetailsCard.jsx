"use client"
import { FriendsContext, friendsData } from '@/components/Context/ContextAPI';
import React, { useContext } from 'react'

const DetailsCard = ({ friendId }) => {
    console.log(friendId);

    const { friends, setFriends } = friendsData();
    console.log(friends)
  return <div></div>;
};

export default DetailsCard
