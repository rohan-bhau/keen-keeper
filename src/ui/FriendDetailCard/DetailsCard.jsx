"use client"
import useData from "@/hooks/useData";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const DetailsCard = ({ friendId }) => {
  const {friends,loading} = useData()
  const friend = friends.find(fr => fr.id === friendId)
  // console.log(friend)
  // console.log(friends, loading);
  return (
    <div className="container mx-auto py-15">
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 px-20 ">
          <LeftCard friend={friend}></LeftCard>
          <RightCard friend={friend}></RightCard>
        </div>
      )}
    </div>
  );
};

export default DetailsCard
