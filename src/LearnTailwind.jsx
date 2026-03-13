import React from "react";
import { Link, NavLink } from "react-router";

const ItemLink = ({ children }) => {
  return (
    <li className="ml-3">
      <a
        className="p-4 font-bold text-white no-underline bg-[#849FFF] rounded-2xl"
        to={""}
      >
        {children}
      </a>
    </li>
  );
};

const UserTag = ({ children }) => {
  return (
    <a href="" className="">
      {children}
    </a>
  );
};

const UserItem = ({ user }) => {
  return (
    <div className="flex justify-center gap-8 p-4 border rounded-lg bg-slate-50">
      <img
        src={"https://picsum.photos/200/200"}
        alt=""
        className="rounded-full w-[100px] h-[100px]"
      />
      <div>
        <h2>Hoang Nguyen</h2>
        <p>Information Technology</p>
        <p>
          <UserTag>stem</UserTag>
          <UserTag>stem</UserTag>
          <UserTag>stem</UserTag>
          <UserTag>stem</UserTag>
        </p>
      </div>
    </div>
  );
};

const LearnTailwind = () => {
  return (
    <div className="container">
      <header className="mb-24">
        <h1>User</h1>
        <nav className="flex justify-between">
          <input
            type="input"
            placeholder="Search users"
            className="p-3 border-2 border-blue-300 focus:border-[#849FFF] focus:outline-none rounded-2xl w-2xl"
          />
          <ul className="flex items-center justify-end mb-0">
            <ItemLink>Repulation</ItemLink>
            <ItemLink>Repulation</ItemLink>
            <ItemLink>Repulation</ItemLink>
            <ItemLink>Repulation</ItemLink>
          </ul>
        </nav>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
};

export default LearnTailwind;
