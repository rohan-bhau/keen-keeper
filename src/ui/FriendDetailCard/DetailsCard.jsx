"use client"
import useData from "@/hooks/useData";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const DetailsCard = ({ friendId }) => {
  // console.log(typeof friendId);
  const {friends,loading} = useData()
  const friend = friends.find((fr) => Number(fr.id) === Number(friendId));
  // console.log(typeof (friend.id));

  // console.log(friends, loading);
  return (
    <div className="container mx-auto py-15">
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : friend ? ( 
        <div className="flex flex-col md:flex-row gap-6 px-20 ">
          <LeftCard friend={friend}></LeftCard>
          <RightCard friend={friend}></RightCard>
        </div>
      ) : (        
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Friend not found!</h2>
          <p>ID: {friendId}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsCard
