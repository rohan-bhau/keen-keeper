import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FriendsCard = ({ friend }) => {
    // console.log(friend)

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
    // console.log(picture) 
    
  return (
    <Link href={`/${id}`} className="border border-[hsl(0,2%,94%)]  shadow-md rounded-md py-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer ">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto">
        <Image
          className="rounded-full overflow-hidden w-full h-auto object-cover"
          src={picture}
          alt={name}
          width={80}
          height={80}
        ></Image>
      </div>

      <div className="text-center">
        <h2 className="font-bold mt-3 text-xl">{name}</h2>
        <p className="text-[#6474bb] mb-2">{days_since_contact}</p>
      </div>
      <div className="flex justify-center gap-2">
        {tags.map((tag, idx) => (
          <p
            key={idx}
            className="bg-[#CBFADB] text-[#244D3F] font-semibold p-2 rounded-full"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex justify-center mx-auto  p-2 w-fit text-[#ffffff] font-semibold  mt-2 mb-3">
        <p
          className={
            status === "Overdue"
              ? "bg-[#EF4444] px-2 py-1 rounded-full"
              : status === "On-Track"
                ? "bg-[#244D3F] px-2 py-1 rounded-full"
                : "bg-[#EFAD44] px-2 py-1 rounded-full"
          }
        >
          {status}
        </p>
      </div>
    </Link>
  );
}

export default FriendsCard
