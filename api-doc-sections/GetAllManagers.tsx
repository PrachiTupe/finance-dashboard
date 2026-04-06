"use client";

import ApiSection from "./ApiSection";

export default function GetAllManagers() {
  return (
    <ApiSection
      title="Get All Managers"
      description="Fetch all users with role MANAGER"
      endpoint="/admin/getallmanagers"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
    />
  );
}