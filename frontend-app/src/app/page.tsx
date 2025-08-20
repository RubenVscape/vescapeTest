"use client";

import React, { useEffect, useState } from "react";

interface IUser {
    fullname: string;
    email: string;
    phone: string;
    userType: string;
    password: string;
    location: string[];
    active: boolean;
    userId: string;
    createdAt: Date
}

export default function Users() {
    const [loading, setIsLoading] = useState(false);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">List of users</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 active:scale-95 transition"
        >
          Add new
        </button>

        <input
          type="text"
          placeholder="Find User..."
          className="block w-full sm:w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">User Type</th>
              <th className="px-6 py-3">Active</th>
              <th className="px-6 py-3">created At</th>
              <th className="px-6 py-3">created By</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) :  (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                 Users not found
                </td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}