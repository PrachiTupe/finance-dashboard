import AddViewer from "@/api-doc-sections/AddViewer";
import ApiSection from "@/api-doc-sections/ApiSection";
import ChangePassword from "@/api-doc-sections/ChangePassword";
import CreateTransaction from "@/api-doc-sections/CreateTransaction";
import GetAllTransaction from "@/api-doc-sections/GetAllTransaction";
import GetMyInfo from "@/api-doc-sections/GetMyInfo";
import GetRole from "@/api-doc-sections/GetRole";
import LoginUser from "@/api-doc-sections/LoginUser";
import LoginUser1 from "@/api-doc-sections/LoginUser1";
import LoginUser2 from "@/api-doc-sections/LoginUser2";
import RegisterUser from "@/api-doc-sections/RegisterUser";
import RegisterUser1 from "@/api-doc-sections/RegisterUser1";
import GetViewers from "@/api-doc-sections/GetViewers";
import GetSummary from "@/api-doc-sections/GetSummary";
import GetCategorySummary from "@/api-doc-sections/GetCategorySummary";
import CategorySummaryByUser from "@/api-doc-sections/CategorySummaryByUser";
import ChangePassword1 from "@/api-doc-sections/ChangePassword1";
import ChangePassword2 from "@/api-doc-sections/ChangePassword2";
import ChangePassword3 from "@/api-doc-sections/ChangePassword3";
import GetAllTransaction1 from "@/api-doc-sections/GetAllTransaction1";
import GetAllTransaction2 from "@/api-doc-sections/GetAllTransaction2";
import GetAllTransaction3 from "@/api-doc-sections/GetAllTransaction3";
import CreateTransaction1 from "@/api-doc-sections/CreateTransaction1";
import AddViewer1 from "@/api-doc-sections/AddViewer1";
import AddViewer2 from "@/api-doc-sections/AddViewer2";
import GetViewer2 from "@/api-doc-sections/GetViewers2";
import GetCategorySummary1 from "@/api-doc-sections/GetCategorySummary1";
import GetCategorySummary2 from "@/api-doc-sections/GetCategorySummary2";
import GetCategorySummary3 from "@/api-doc-sections/GetCategorySummary3";
import { Cat } from "lucide-react";
import CategorySummaryByUser1 from "@/api-doc-sections/CategorySummaryByUser1";
import CategorySummaryByUser2 from "@/api-doc-sections/CategorySummaryByUser2";
import AssignedUsersForViewer from "@/api-doc-sections/AssignedUsersforViewers";
import GetAllUsers from "@/api-doc-sections/GetAllUsers";
import GetUsersWithoutManager from "@/api-doc-sections/GetUsersWithoutManager";
import CreateManager from "@/api-doc-sections/CreateManager";
import AssignManager1 from "@/api-doc-sections/AssignManager1";
import AssignManager from "@/api-doc-sections/AssignManager";
import GetAllManagers from "@/api-doc-sections/GetAllManagers";
import GetManagersWithUsers from "@/api-doc-sections/GetManagersWithUsers";
import SearchUsers from "@/api-doc-sections/SearchUsers";

// Import all your section components

// Add more imports as you create more sections

export default function ApiDocsPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">

  {/* LEFT SIDE */}
  <div>
    <h2 className="text-xl font-semibold mb-3">
      Project Overview
    </h2>

    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
      This project is built as a backend-focused assessment for Zorvyn.
      It demonstrates a role-based finance management system with multiple APIs.
      Users can manage transactions, view summaries, and control access for viewers and managers.
      The platform showcases secure, scalable backend architecture with real-world features.
    </p>

    <img
      src="/explain.png"
      alt="Project Explanation"
      className="rounded-lg shadow-md w-full"
    />
  </div>

  {/* RIGHT SIDE */}
  <div>
    <h2 className="text-xl font-semibold mb-3">
      Key Features
    </h2>

<ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">

  {/* Roles */}
  <li>Role-based system: User, Viewer, Manager, Admin</li>

  {/* User capabilities */}
  <li>
    User can create, update, delete, and filter transactions
  </li>
  <li>
    User can view summaries: net balance, income, expenses, category-wise
  </li>
  <li>
    User can add multiple viewers to allow read-only access to their transactions
  </li>

  {/* Viewer/Manager capabilities */}
  <li>
    Viewer can see transactions of users who added them and view summaries
  </li>
  <li>
    Manager can view and analyze transactions of assigned users
  </li>

  {/* Admin capabilities */}
  <li>
    Admin can assign managers to viewers, manage users, and monitor unassigned accounts
  </li>

  {/* Security */}
  <li>JWT-based authentication for secure API access</li>
  <li>Role-based protected routes with proper authorization</li>
  <li>Rate limiting applied on login (5 requests per minute)</li>

  {/* Validation and extras */}
  <li>Input validation for user registration</li>
  <li>Pagination implemented for transaction APIs</li>
  <li>Search functionality for admin to find users</li>
  <li>Proper HTTP status codes including forbidden access handling</li>

</ul>
  </div>

</div>

      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        API Documentation Playground
      </h1>

      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        Authentication APIs
      </h1>
      
      <RegisterUser />
      <RegisterUser1 />

      <LoginUser />
      <LoginUser1 />
      <LoginUser2 />

      <ChangePassword />
      <ChangePassword1 />
      <ChangePassword2 />

      <GetRole />
      <GetMyInfo />


      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        User Access APIs
      </h1>

      <GetAllTransaction />
      <CreateTransaction />
      <AddViewer />
      <AddViewer1 />
      <AddViewer2 />
      <GetViewers />
      <GetSummary />
      <GetCategorySummary />






      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        Viewer Access APIs
      </h1>

      <GetAllTransaction1 />
      <CreateTransaction1 />
      <GetCategorySummary1 />
      <CategorySummaryByUser2 />
      <AssignedUsersForViewer />
      
      




      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        Manager Access APIs
      </h1>

      <GetAllTransaction2 /> 
      <CreateTransaction1 />
      <GetViewer2 />
      <GetCategorySummary2 />
      <CategorySummaryByUser1 />




      <h1 className="text-center mb-8 text-4xl font-bold text-black">
        Admin Access APIs
      </h1>

      <GetAllTransaction3 />
      <CreateTransaction1 />
      <GetCategorySummary3 />
      <CategorySummaryByUser />
      <GetAllUsers />
      <GetUsersWithoutManager />
      <CreateManager />
      <AssignManager /> 
      <AssignManager1 />
      <GetAllManagers />
      <GetManagersWithUsers />
      <SearchUsers />  



    </div>    
  );
}