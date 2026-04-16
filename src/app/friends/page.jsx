"use client"
import useData from "@/hooks/useData";
import FriendsCard from "@/ui/FriendsCard";

const FriendsPage = () => {
      const { friends, loading } = useData();
  return (
    <div className="container mx-auto py-20">
      <h2 className="px-20 font-bold text-3xl mb-4">Your Friends</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend}></FriendsCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default FriendsPage
