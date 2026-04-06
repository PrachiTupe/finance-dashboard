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