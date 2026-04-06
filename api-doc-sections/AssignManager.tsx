"use client";

import ApiSection from "./ApiSection";

export default function AssignManager() {
  return (
    <ApiSection
      title="Assign Manager"
      description="Assign a manager to a user (Admin only)"
      endpoint="/admin/assign-manager"
      method="PUT"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
      defaultBody={JSON.stringify(
        {
          userId: "69d37aa539f748db75621444",
          managerId: "69d3fe00aef325fadc78b43e"
        },
        null,
        2
      )}
    />
  );
}