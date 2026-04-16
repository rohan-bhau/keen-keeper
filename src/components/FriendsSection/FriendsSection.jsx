"use client"
import useData from '@/hooks/useData'
import FriendsCard from '@/ui/FriendsCard';
import React from 'react'


const FriendsSection = () => {

    const { friends, loading } = useData();
    console.log(friends,loading);
  return (
    <div className="container mx-auto">
          <div className="mt-15 mb-10 border-t-2 border-[#e9e9e9] mx-20"></div>
          
          <h2 className='px-20 font-bold text-3xl mb-4'>Your Friends</h2>
      {loading ? (
        <div className="flex justify-center items-center pb-15">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-15 px-20">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend}></FriendsCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default FriendsSection
