import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

const Searchbar = () => {
  return (
    <>
      <div className="w-96">
      <ReactSearchBox
        placeholder="Search"
        data={[]}
        onSelect={function (record: {
          item: { key: string; value: string };
        }): void {
          throw new Error("Function not implemented.");
        }}
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      </div>
    </>
  );
};

export default Searchbar;
