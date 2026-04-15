"use client"

import { useContext } from "react"
import { FriendsContext } from "../Context/ContextAPI"
import FriendsCard from "@/ui/FriendsCard"

const FriendsSection = () => {

    const friends = useContext(FriendsContext)

  return (
    <div className="container mx-auto px-20 pb-10 pt-7 border-t border-[#e9e9e9]">
          <h2 className="font-bold text-3xl mb-4">Your Friends</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {
                  friends.map(friend=><FriendsCard key={friend.id} friend={friend}></FriendsCard>)
              }
          </div>
    </div>
  )
}

export default FriendsSection
