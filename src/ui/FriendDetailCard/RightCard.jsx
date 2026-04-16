import Image from "next/image";
import { TbPhoneCall } from "react-icons/tb";

const RightCard = ({ friend }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;
  console.log(days_since_contact)
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-12  text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">
            {days_since_contact}
          </h2>
          <p className="text-lg text-[#6474bb]">Since Contact</p>
        </div>
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-8 text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">{goal}</h2>
          <p className="text-lg text-[#6474bb]">Goal(Days)</p>
        </div>
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-8  text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">
            {next_due_date}
          </h2>
          <p className="text-lg text-[#6474bb]">Next Due</p>
        </div>
      </div>
      <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md p-10 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-[#244d3f] mb-4">
            Relationship Goal
          </h2>
          <button className="btn">Edit</button>
        </div>
        <p className="text-lg text-[#6474bb]">
          Connect Every{" "}
          <span className="text-black font-bold">{goal} days</span>
        </p>
      </div>
      <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md p-9">
        <h2 className="text-[#244d3f] font-semibold text-xl mb-4">
          Quick Check-In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="group border border-[#e9e9e9] shadow-md rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/call.png"}
              alt="call icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Call</p>
          </div>
          <div
            className="group border border-[#e9e9e9] shadow-md items-center rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/text.png"}
              alt="text icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Text</p>
          </div>
          <div
            className="group border border-[#e9e9e9] shadow-md rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/video.png"}
              alt="video icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCard
