"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentUserwithall, asyncsignup } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";
import Link from "next/link";

export const metadata = {
  title: 'Student Signup',
  description: 'Signup',
}

const Studentsignup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated ,student } = useSelector((state) => state.StudentSlice);
  console.log(student)
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const Student = {
      firstname,
      lastname,
      gender,
      city,
      email,
      contact,
      password,
    };
    console.log(Student);
    dispatch(asyncsignup(Student));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentUserwithall());
    if (isAuthenticated) router.push("/Student/StudentHome");
  }, [isAuthenticated]);

  return (
    <div className=" w-screen h-screen ">
      <Nav />
      <div className=" h-10/12 flex items-center justify-center py-5 ">
        <form
          className="text-center"
          onSubmit={handleSignup}
          method="Post"
        >
          <h1 className=" block text-3xl  my-5"> Student Register </h1>
          <input
            className=" w-80  block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4 "
            type="firstname"
            placeholder="FirstName"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            className="w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="lastname"
            placeholder="LastName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          
            
            <input  className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm  "
              type="city"
              placeholder="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          
          <input className="w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="contact"
            placeholder="contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />

          <input className="w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <label className=" block bg-while text-gray-800  my-4  ">
               <span className="pe-1 block">Gender</span>
              <select className=" w-80 ps-1 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          <button
            className="  px-5 py-3 bg-gray-800 text-white rounded-lg mt-6 "
            type="submit"
            onSubmit={handleSignup}
          >
            Signup
          </button>
          <p className="mt-1 text-sm">Already have a Account <Link className="text-blue-600" href="/Studentlogin">Sign in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Studentsignup;
