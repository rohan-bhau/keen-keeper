
import DetailCard from "./DetailCard/DetailCard"

const FriendDetailPage = async({ params }) => {
    const {friendId}=await params
    console.log(friendId)
  return (
    <div>
      <DetailCard friendId={friendId}></DetailCard>
    </div>
  )
}

export default FriendDetailPage
