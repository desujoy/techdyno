"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { EventItem } from "../definitions/event-items";
import Link from "next/link";
import { ClubData } from "../definitions/club";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [searchEventResults, setSearchEventResults] = useState<EventItem[]>([]);
  const [searchClubResults, setSearchClubResults] = useState<ClubData[]>([]);

  useEffect(() => {
    setShowLoading(true);
    if (searchValue.length > 0) {
      setIsSearching(true);
      fetch(`/api/search?search=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setShowLoading(false);
          setSearchEventResults(data.filteredEventItems);
          setSearchClubResults(data.filteredClubItems);
        });
    } else {
      setIsSearching(false);
      setSearchEventResults([]);
      setSearchClubResults([]);
    }
  }, [searchValue]);

  return (
    <div className="flex flex-col w-[70%] mr-[20%]">
      <Input
        className="w-full"
        prefix={<SearchOutlined />}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for items"
        onPressEnter={() => {
          window.location.href = `/search/${searchValue}`;
        }}
      />
      {isSearching && (
        <div className="absolute flex flex-col top-11 max-h-[60%] w-[70%] bg-slate-50 text-black z-10 rounded-md overflow-y-scroll">
            {searchClubResults.length === 0 && searchEventResults.length === 0 && !showLoading && (
              <div className="p-2 pl-4 bg-slate-100 block w-full text-left">
                No results found</div>
            )}
            <span className="p-2 pl-4 block w-full text-left">Clubs</span>
            {searchClubResults.length > 0 &&
              searchClubResults.map((result) => (
                <Link href={`/club/${result.name}`} key={result.id}>
                  <span
                    className="p-2 pl-4 bg-slate-100 block w-full text-left hover:bg-slate-200 cursor-pointer"
                    key={result.id}
                    >
                    {result.fullname}
                  </span>
                </Link>
              ))}
              <span className="p-2 pl-4 block w-full text-left">Events</span>
              {searchEventResults.length > 0 &&
              searchEventResults.map((result) => (
                <Link href={`/events/${result.id}`} key={result.id}>
                  <span
                    className="p-2 pl-4 bg-slate-100 block w-full text-left hover:bg-slate-200 cursor-pointer"
                    key={result.id}
                  >
                    {result.name}
                  </span>
                </Link>
              ))}
        </div>
      )}
      
    </div>
  );
};
