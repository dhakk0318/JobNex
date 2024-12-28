"use client";
import React, { useEffect, useState } from "react";
import { asyncEmployeSignin , asyncCurrentEmploye } from "@/Store/Actions/EmployeAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

const Employesignin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated ,employe } = useSelector((state) => state.EmployeSlice);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  console.log(isAuthenticated)

  const handleSignin = (e) => {
    e.preventDefault();
    const employe = {
      email,
      password,
    };
    dispatch(asyncEmployeSignin(employe));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    if (isAuthenticated && employe) router.push("/Employe/EmployeHome");
    console.log(`on signin ${employe}`);
  }, [isAuthenticated]);

  return (
    <div className=" w-screen h-screen ">
      <Nav></Nav>
      <div className=" h-4/5 flex items-center justify-center">
      <form className=" text-center" onSubmit={handleSignin} method="Post">
        <h1 className="mt-6 text-3xl text-gray-800">Employe Login </h1>
       
        <input className="mt-6 w-80  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <input className="mt-6 w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
          <Link className=" block text-sm text-blue-600 mt-3" href={"/Forgetpassword"}>forgetpassword</Link>

        <button className="px-5 py-3 bg-gray-800 text-white rounded-lg mt-10" type="submit">Signup</button>
        <div  className=" text-sm mt-3 ">
            Do not have a account <Link className="text-blue-500" href={"/EmployeSignup"}>Sign up</Link>
          </div>
      </form>
      </div>
    </div>
  );
};

export default Employesignin;
