"use client"
import Banner from "@/components/Banner/Banner";
import { FriendsContext } from "@/components/Context/ContextAPI";
import FriendsSection from "@/components/FriendsSection/FriendsSection";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  // const {friends} = useContext(FriendsContext)
  // console.log(friends)
  return (
    <main>
      <Banner></Banner>
      <FriendsSection></FriendsSection>
    </main>
  );
}

