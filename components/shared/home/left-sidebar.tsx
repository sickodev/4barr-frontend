"use client";

import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, User } from "lucide-react";
import { useState } from "react";

const LeftSidebar = () => {
    const [impressionRise, setImpressionRise] = useState(true);
  return (
    <nav className="hidden md:block p-2 rounded-xl h-fit w-1/5 space-y-3 bg-primary-foreground">
      <nav className="border-b hover:bg-secondary hover:text-brand hover:border-b-brand transition ease-linear group p-1">
        <a href="/profile" className="flex space-x-3 ease-linear ">
          <User className="size-5" />
          <span>My Profile</span>
        </a>
      </nav>
      
      <div className="opacity-60">
       <div className="py-2 flex justify-between">
        <p>Impressions</p>
        <p className={cn("flex",impressionRise?"text-green-600":"text-red-600")}>
            <span>93.6K</span>
            <span className="size-5">
                {impressionRise?(<ArrowUpIcon/>):(<ArrowDownIcon/>)}
            </span>
        </p>
       </div>
       <hr />
      </div>
    </nav>
  );
};

export default LeftSidebar;
