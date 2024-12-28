"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [student, getStudent] = useState(false);
  const [employ, getEmploy] = useState(false);

  const Employdropdown = () => {
    getEmploy(!employ);
  };
  const Studentdropdown = () => {
    getStudent(!student);
  };
  const Studentfalse = () => {
    getStudent(false);
  };
  return (
    <nav className="bg-gray-800 py-3 flex justify-between items-center px-10">
      {/*  Company Logo */}
      <div className="flex items-center">
        <h1 className="text-white">JobNex</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className=" relative mx-4">
          <button
            // onClick={changeProfileDropdown}
            onClick={Studentdropdown }
            
            className="flex items-center bg-white text-gray-800 py-2 px-3 rounded-lg focus:outline-none"
          >
            Student
          </button>
          {student && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border rounded shadow"
              onMouseLeave={Studentdropdown}
            >
              <ul className="p-2">
                <li className="cursor-pointer hover:bg-gray-200 p-2">
                  <Link href="/Studentlogin">Login</Link>
                </li>
                <li className="cursor-pointer hover:bg-gray-200 p-2">
                  <Link href="/Studentsignup">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className=" relative mx-4">
          <button
            // onClick={changeProfileDropdown}
            onClick={Employdropdown }
            className="flex items-center  bg-white text-gray-800 py-2 px-3 rounded-lg focus:outline-none"
          >
            Employ/T&P
          </button>
          {employ && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border rounded shadow"
              onMouseLeave={Employdropdown}
            >
              <ul className="p-2">
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                  <Link href="/Employesignin">Login</Link>
                </li>
                <li className="cursor-pointer hover:bg-gray-200 p-2">
                  <Link href="/EmployeSignup">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
