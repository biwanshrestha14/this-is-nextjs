"use client";
import { handleform } from "@/actions/form";

import { useRef } from "react";
export default function Home() {
  let ref = useRef();
  return (
    <div className="mx-auto">
      <form
        ref={ref}
        action={(e) => {
          handleform;
          ref.current.reset();
        }}
        className="mx-auto my-10"
      >
        <div className="flex gap-5">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="border-2 border-white"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="add"
            id=""
            className="border-2 border-white"
          />
        </div>
        <input
          type="submit"
          value="click me"
          className="border-2 border-white px-2"
        />
      </form>
    </div>
  );
}
