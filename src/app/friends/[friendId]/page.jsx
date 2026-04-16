import DetailsCard from '@/ui/FriendDetailCard/DetailsCard';
import React from 'react'

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;

  return (
    <div>
      <DetailsCard friendId={friendId}></DetailsCard>
    </div>
  )
}

export default FriendDetailPage

// export default function FriendDetailPage(props) {
//   console.log("PROPS:", props);

//   return <div>Check console</div>;
// }