"use client";

import ApiSection from "./ApiSection";

export default function GetManagersWithUsers() {
  return (
    <ApiSection
      title="Get Managers With Users"
      description="Fetch all managers along with their assigned users"
      endpoint="/admin/get-managers-with-users"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
    />
  );
}