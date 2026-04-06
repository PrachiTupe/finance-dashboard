"use client";

import ApiSection from "./ApiSection";

export default function AssignManager1() {
  return (
    <ApiSection
      title="Assign Manager - Cannot assign multiple managers to a user"
      description="Can not assign two or more managers to a user. If a user already has a manager."
      endpoint="/admin/assign-manager"
      method="PUT"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
      defaultBody={JSON.stringify(
        {
          userId: "69d12544fde0e60c940954b9",
          managerId: "69d3fe00aef325fadc78b43e"
        },
        null,
        2
      )}
    />
  );
}