"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

 
  useEffect(() => {
    console.log("Client Side");
  }, []);

  return <div className="flex flex-col">
    <span>{session?.user?.name ?? 'No Name'}</span>
    <span>{session?.user?.email ?? 'No Email'}</span>
    <span>{session?.user?.image ?? 'No Image'}</span>
  </div>;
};

export default ProfilePage;
