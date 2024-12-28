"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynStudentlogout } from "@/Store/Actions/StudentActions";

const Studentnav = () => {
  const dispatch = useDispatch();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { student } = useSelector((state) => state.StudentSlice);

  console.log(student)

  const changeProfileDropdown = () => { 
    setProfileDropdown(!profileDropdown);
  };
  const Studentsignout = () =>{
    dispatch(asynStudentlogout())
  }
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center px-10">
      {/*  Company Logo */}
      <div className="flex items-center">
        <Link href="/Student/StudentHome">
        <h1 className="text-white">JobNex</h1>
        </Link>
      </div>
      <div className=" flex">
        <Link className=" text-white me-16" href="/Student/Internships">INTERNSHIPS</Link>
        <Link className=" text-white me-16" href="/Student/Jobs">Jobs</Link>
        <div className=" relative">

        <button
          // onClick={changeProfileDropdown}
          onMouseEnter={changeProfileDropdown}
          className="flex items-center text-white focus:outline-none"
          >
          Student
        </button>
        {profileDropdown && (
          <div
          className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10"
          onMouseLeave={changeProfileDropdown}
          >
            <ul className="p-2">
              <li className="cursor-pointer hover:bg-gray-200 p-2 border-b-[1px] ">
                <Link href="/Student/profile">
                <img className="h-[50px] rounded-sm  ps-1" src={student && student.avatar.url} alt="profile" />

                  {student && student.firstname}  {student && student.lastname}
                  </Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/Editresume">Edit Resume</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/changepassword">Change password</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/updatestudent">Update profiel</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <p onClick={Studentsignout}>Sign out</p>
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Studentnav;
