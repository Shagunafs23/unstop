"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const username = searchParams.get("username");
  const email = searchParams.get("email");

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex flex-col items-center justify-center">Welcome to <br/><h1 className="font-extrabold text-purple-700 flex flex-col items-center justify-center">Unstop</h1></h1>
      <div className="bg-white rounded-[20px] shadow-lg p-8 text-center">
        <img
          src="/loggin.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-[full] mx-auto mb-4"
        />
        <h2 className="text-xl font-extrabold text-purple-600">{username}</h2>
        <p className="text-gray-600 font-bold">{email}</p>
        <button
          onClick={handleLogout}
          className="mt-4 py-2 px-6 bg-purple-600 rounded-[16px] text-white hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
