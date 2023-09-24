import React, { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getUserById } from "../apis/users";
import { editUser } from "../apis/users";
import { inputClass } from "../utils/TailWindClassesUtil";

export default function UserById() {
  const { userId } = useParams();
  const [user, setUser] = React.useState({});
  useEffect(() => {
    getUserById(userId).then((res) => {
      // console.log(res);
      setUser(res?.data);
    });
  }, []);
  return (
    <div className="max-w-lg m-auto flex justify-center my -2 flex-col gap-2">
      <img src={user?.avatar} className="self-center" alt="" />
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          editUser(user).then((res) => {
            console.log(res);
          });
        }}
      >
        <input
          onChange={(e) => {
            user.first_name = e.target.value;
            setUser({ ...user });
          }}
          className={inputClass}
          type="text"
          value={user?.first_name}
        />
        <input
          onChange={(e) => {
            user.email = e.target.value;
            setUser({ ...user });
          }}
          className={inputClass}
          type="text"
          value={user?.email}
        />
        <button
          className={
            "bg-green-500 w-fit text-white px-3 py-2 rounded-md self-center"
          }
        >
          Edit
        </button>
      </form>
    </div>
  );
}
