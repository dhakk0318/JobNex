"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Employenav = () => {
  const router = useRouter();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { isAuthenticated ,employe } = useSelector((state) => state.EmployeSlice);
  console.log(employe)

  useEffect(() => {
    if(!isAuthenticated) router.push("/Employesignin")
    // if (isAuthenticated) router.push("/Student/StudentHome");
    // console.log(student)
  }, [isAuthenticated]);

  const changeProfileDropdown = () => { 
    setProfileDropdown(!profileDropdown);
  };
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center px-10">
      {/*  Company Logo */}
      <div className="flex items-center">
        <Link href="/Employe/EmployeHome" className=" text-white me-16"><h1 className="">JobNex</h1></Link>
      </div>
      <div className=" flex">
        
        <Link className=" text-white me-16" href="/Employe/internships">Internship</Link>
        <Link className=" text-white me-16" href="/Employe/jobs">Jobs</Link>
        <div className=" relative">

        <button
          // onClick={changeProfileDropdown}
          onMouseEnter={changeProfileDropdown}
          className="flex items-center text-white focus:outline-none"
          >
          Employe
        </button>
        {profileDropdown && (
          <div
          className="absolute right-0 mt-2 w-48 bg-white border rounded shadow"
          onMouseLeave={changeProfileDropdown}
          >
            <ul className="p-2">
            <li className="cursor-pointer hover:bg-gray-200 p-2 border-b-[1px] ">
                <Link href="profile">
                <img className="h-[50px] rounded-sm  ps-1" src={employe.organisationlogo.url} alt="" />

                  {employe.firstname} {employe.lastname}
                  </Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Employe/CreateJob">Create Job</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Employe/CreateInternship">Create Internship</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Employe/updateemploye">Update profiel</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Employe/changepassword">Change password</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                 Sign out
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Employenav;
