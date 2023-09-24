import React from "react";
import { useRef } from "react";
import { inputClass } from "../utils/TailWindClassesUtil";
import UserById from "./UserById";

export default function UserForm(props) {
  const nameRef = useRef();
  const jobRef = useRef();
  const handleSubmit = (e) => {
    console.log("here insite submit fn");
    e.preventDefault();
    let user = {
      name: nameRef?.current?.value,
      job: jobRef?.current?.value,
    };
    props?.onFormSubmit(user);
  };
  //   const inputClass = "border-[1px] border-gray-300 p-2 rounded-md";
  return (
    <div className="grid gap-2">
      <h2 className="my2-20">UserForm</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-1"
      >
        <input
          ref={nameRef}
          className={inputClass}
          //   inputclassref={nameRef}
          type="text"
          placeholder="Name"
        />
        <input
          className={inputClass}
          ref={jobRef}
          type="text"
          placeholder="job"
        />
        <button className={inputClass} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
