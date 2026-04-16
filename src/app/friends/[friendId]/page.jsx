import DetailsCard from '@/ui/FriendDetailCard/DetailsCard';
import React from 'react'

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
   
  return (
    <div>
      <DetailsCard friendId={parseInt(friendId)}></DetailsCard>
    </div>
  )
}

export default FriendDetailPage
