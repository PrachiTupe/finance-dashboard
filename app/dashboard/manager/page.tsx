"use client";

import React from "react";

export default function ManagerDashboard() {
  // Note: We no longer need to pass sidebarItems here because the 
  // Layout component handles navigation based on the user's role 
  // or the current path automatically.

  return (
    <div className="animate-in fade-in duration-500">
      {/* The Greeting - Matches the "Good Morning" style from your image */}
      <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-8">
        Good Morning, Prachi Tupe!
      </h1>

      {/* Actual Page Content starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for your actual dashboard cards/widgets */}
        <div className="h-64 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
          Analytics Widget
        </div>
        <div className="h-64 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
          Transaction History
        </div>
        <div className="h-64 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
          Task Overview
        </div>
      </div>
    </div>
  );
}