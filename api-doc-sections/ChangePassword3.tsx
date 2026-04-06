"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function ChangePassword3() {
  return (
    <ApiSection
      title="Change Password - user not Found"
      description="If the user is not found, it returns 'User not found'"
      endpoint="/auth/change-password"
      method="PUT"
      defaultBody={JSON.stringify(
        {
          oldPassword: "manager1password",
          newPassword: "manager1password",
        },
        null,
        2
      )}
      // Pre-fill token
      token="eyJhbGciOiJIUzI1NiIsInR5cbI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1MzE3MTE4LCJleHAiOjE3NzU5MjE5MTh9.hhT6WZ4GtiRzyBv8DGZQyrTUc6K5lEh7-ItTz61QTv4"
    />
  );
}