import { Button } from "../../../components/ui/button";
import { useUser } from '@clerk/nextjs'
import { BellDot, Search } from "lucide-react";
import React from "react";

function Header() {
  const { user } = useUser();
  return (
    <div className="p-4 bg-white flex justify-between">
      {/*Search bar*/}
      <div className="flex gap-2 border rounded-md p-2 ">
        <Search className="h-5 w-5" />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      {/*Get Started button & Notification Bell*/}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500 " />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
