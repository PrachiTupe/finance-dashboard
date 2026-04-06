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

// Import all your section components

// Add more imports as you create more sections

export default function ApiDocsPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        API Documentation Playground
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




      <GetAllTransaction />
      <GetAllTransaction1 />
      <GetAllTransaction2 /> 
      <GetAllTransaction3 />


      <CreateTransaction />
      <CreateTransaction1 />



      <AddViewer />
      <GetViewers />
      <GetSummary />
      <GetCategorySummary />
      <CategorySummaryByUser />


    </div>
  );
}