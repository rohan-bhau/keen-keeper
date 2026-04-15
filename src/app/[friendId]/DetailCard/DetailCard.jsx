"use client"
import { FriendsContext } from "@/components/Context/ContextAPI"
import LeftCard from "@/ui/FriendDetailCard/LeftCard"
import RightCard from "@/ui/FriendDetailCard/RightCard"
import { useContext } from "react"

const DetailCard = ({ friendId }) => {
    // console.log(friendId)

    const friends = useContext(FriendsContext)
    // console.log(friends)
    const friend = friends.find(fr =>friendId ==fr.id)
    // console.log(friend)


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 container mx-auto">
      <LeftCard friend={friend}></LeftCard>
      <RightCard friend={friend}></RightCard>
    </div>
  );
}

export default DetailCard
