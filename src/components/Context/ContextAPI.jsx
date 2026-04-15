"use client"

import { createContext, useEffect, useState } from "react"

export const FriendsContext = createContext()

export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
        .then(data=>setFriends(data))
    },[])
    
    return <FriendsContext.Provider value={friends}>
        {children}
    </FriendsContext.Provider>
}
