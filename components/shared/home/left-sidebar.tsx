"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, User, User2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
  const [impressionRise, setImpressionRise] = useState(true);
  const [followerRise, setFollowerRise] = useState(false);
  const [clapRise, setClapRise] = useState(true);
  const [inviteRise, setInviteRise] = useState(true);

  const [topArtists, setTopArtists] = useState<any[]>();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    async function getArtistData() {
      setTopArtists([
        {
          name: "Number 1",
          followers: "156.3K",
        },
        {
          name: "Number 2",
          followers: "149.3K",
        },
        {
          name: "Number 3",
          followers: "130.0K",
        },
      ]);
    }

    getArtistData();
  }, []);

  useEffect(()=>{
    setMounted(true);
  },[])

  if (!mounted) {
    return (
      <div className="space-y-8">
        <div className="w-full space-y-3">
          <Skeleton className="w-full h-12" />
          <div className="grid grid-cols-3 space-x-2">
            <Skeleton className="col-span-2 w-full h-12" />
            <Skeleton className="h-12" />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <Skeleton className="h-12" />
            <Skeleton className="col-span-2 w-full h-12" />
          </div>
        </div>
        <div className="w-full space-y-3">
          <Skeleton className="w-full h-12" />
          <div className="grid grid-cols-3 space-x-2">
            <Skeleton className="col-span-2 w-full h-12" />
            <Skeleton className="h-12" />
          </div>
          <div className="grid grid-cols-3 space-x-2">
            <Skeleton className="h-12" />
            <Skeleton className="col-span-2 w-full h-12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="w-full h-fit space-y-4">
      <nav className="hidden md:block p-2 rounded-xl space-y-3 bg-primary-foreground">
        <nav className="border-b hover:bg-secondary hover:text-brand hover:border-b-brand transition ease-linear group p-1">
          <a href="/profile" className="flex space-x-3 ease-linear ">
            <User className="size-5" />
            <span>My Profile</span>
          </a>
        </nav>

        <div className="opacity-60">
          <div className="py-2 flex justify-between">
            <p>Impressions</p>
            <p
              className={cn(
                "flex",
                impressionRise ? "text-green-600" : "text-red-600"
              )}
            >
              <span>93.6K</span>
              <span className="size-5">
                {impressionRise ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </p>
          </div>
          <hr />
          <div className="py-2 flex justify-between">
            <p>Followers</p>
            <p
              className={cn(
                "flex",
                followerRise ? "text-green-600" : "text-red-600"
              )}
            >
              <span>45.8K</span>
              <span className="size-5">
                {followerRise ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </p>
          </div>
          <hr />
          <div className="py-2 flex justify-between">
            <p>Claps</p>
            <p
              className={cn(
                "flex",
                clapRise ? "text-green-600" : "text-red-600"
              )}
            >
              <span>160.6K</span>
              <span className="size-5">
                {clapRise ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </p>
          </div>
          <hr />
          <div className="py-2 flex justify-between">
            <p>Invites</p>
            <p
              className={cn(
                "flex",
                inviteRise ? "text-green-600" : "text-red-600"
              )}
            >
              <span>650</span>
              <span className="size-5">
                {inviteRise ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </p>
          </div>
          <hr />
        </div>
      </nav>
      <nav className="hidden md:block p-2 rounded-xl space-y-3 bg-primary-foreground">
        <nav className="border-b p-1 opacity-80">
          <p className="font-bold text-lg">Top Artists</p>
        </nav>
        <div className="space-y-3">
          {topArtists?.map((topArtist, idx) => (
            <a
              href="#"
              className="flex items-center justify-between border-b py-1 hover:bg-secondary transition ease-linear hover:text-brand"
            >
              <div className="p-1 border border-primary/50 rounded-full">
                <User2Icon className="size-5" />
              </div>
              <p className="font-bold">{topArtist.name}</p>
              <p className="text-sm opacity-80">{topArtist.followers}</p>
            </a>
          ))}
        </div>
      </nav>
    </nav>
  );
};

export default LeftSidebar;
