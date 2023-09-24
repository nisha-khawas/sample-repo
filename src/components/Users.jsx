import React, { useEffect, useState } from "react";
import { getAllUsers, saveUser } from "../apis/users";
import UserForm from "./UserForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [selectedUser, setSelectedUser] = useState({});
  const [mode, setMode] = useState("ADD");
  useEffect(() => {
    getAllUsers(page).then((res) => {
      setUsers(res?.data);
    }, []);
  }, [page]);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setPage(item);
          }}
        >
          {item}
        </button>
      ))}
      <div className="max-w-lg m-auto my-1 grid gap-2">
        <div className="grid grid-cols-3 gap-1">
          {users.map((user, index) => (
            <Link
              to={`/users/${user?.id}`}
              className="relative text-2xl rounded-md overflow-hidden shadow-md "
            >
              <img width={"100%"} src={user?.avatar} alt="" />

              <div
                onClick={() => {
                  setSelectedUser(user);
                  setMode("EDIT");
                }}
                className="cursor-pointer absolute top-1 right-1 rounded-full hover:bg-gray-100/50 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* {JSON.stringify(users)} */}
      <UserForm
        mode={mode}
        selectedUser={selectedUser}
        onFormSubmit={(user) => {
          saveUser(user).then((res) => {
            console.log(res);
          });
          // console.log(user);
        }}
      />
    </div>
  );
}
