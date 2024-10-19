"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const VerifyEmailPage = () => {
  // const router = useRouter();
  const [token, setToken] = useState();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const {query} = router;
    // const urlToken:any = query.token || "";
    
    const urlToken:any = window.location.search.split('=')[1]
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    setError(false)

    if (!token) return;
    verifyEmail();
  }, [token]);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token }) 
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  return <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-4xl">Verify Email</h1>
    <h2 className="p-2 bg-orange-500 text-black">
      {token || "No Token"}
    </h2>
    {verified && (
      <div>
        <h2>Verified</h2>
        <Link href='/login'>Login</Link>
      </div>
    )}
    {error && (
      <div>
        <h2>Error</h2>
      </div>
    )}
  </div>;
};

export default VerifyEmailPage;