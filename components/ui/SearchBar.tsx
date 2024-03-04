"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ShopItem } from "../definitions/shop-items";
import Link from "next/link";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<ShopItem[]>([]);

  useEffect(() => {
    setShowLoading(true);
    if (searchValue.length > 0) {
      setIsSearching(true);
      fetch(`/api/search?search=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setShowLoading(false);
          setSearchResults(data);
        });
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [searchValue]);

  return (
    <div className="flex flex-col w-[70%]">
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
            {searchResults.length === 0 && !showLoading && (
              <div className="p-2 pl-4 bg-slate-100 block w-full text-left">
                No results found</div>
            )}
            {searchResults.length > 0 &&
              searchResults.map((result) => (
                <Link href={`/item/${result.id}`} key={result.id}>
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
