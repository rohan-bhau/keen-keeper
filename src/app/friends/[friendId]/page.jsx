import DetailsCard from '@/ui/FriendDetailCard/DetailsCard';
import React from 'react'

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
    // console.log(friendId, "id");
  return (
    <div>
      <DetailsCard friendId={friendId}></DetailsCard>
    </div>
  );
}

export default FriendDetailPage
